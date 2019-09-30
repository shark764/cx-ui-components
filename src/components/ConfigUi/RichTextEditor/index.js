import React, { Fragment } from 'react';
import Editor from 'draft-js-plugins-editor';
import 'draft-js-focus-plugin/lib/plugin.css';
import styled, { css, injectGlobal } from 'styled-components';
import { EditorState, RichUtils, AtomicBlockUtils, Modifier, CompositeDecorator } from 'draft-js';

// Inline style Icons:
import BoldSvgIcon from '../../Icons/RichTextEditorSVGs/BoldSvgIcon';
import ItalicFontSvgIcon from '../../Icons/RichTextEditorSVGs/ItalicFontSvgIcon';
import UnderlineSvgIcon from '../../Icons/RichTextEditorSVGs/UnderlineSvgIcon';
import TextColorSvgIcon, { colorStyleMap } from '../../Icons/RichTextEditorSVGs/TextColorSvgIcon';

// Block style Icons:
import OrderedListSvgIcon from '../../Icons/RichTextEditorSVGs/OrderedListSvgIcon';
import UnorderedListSvgIcon from '../../Icons/RichTextEditorSVGs/UnOrderedListSvgIcon';
import ImageUploadSvgIcon from '../../Icons/RichTextEditorSVGs/ImageUploadSvgIcon';
import ToggleTextSvgIcon from '../../Icons/RichTextEditorSVGs/ToggleTextSvgIcon';
import HeaderSvgIcon from '../../Icons/RichTextEditorSVGs/HeaderSvgIcon';

// Image & text conversion Plugins:
import { plugins, blockRenderer, decorators, AddImageComponent } from './imagePlugins';
import { convertStateFromHtml, convertStateToHtml } from './textConversionPlugins'

injectGlobal`
.public-DraftEditor-content {
    min-height: 500px;
}
`;

const EditorContainer = styled.div`
 ${props => props.isDisplayContentInHtml && css`opacity: 0.5;`}
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 6px;
  align-items: center;
  height: 30px;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);
`;

const LineBreaker = styled.span`
  border: 1px solid #00000047;
  height: 25px;
`;

export class RichTextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: (this.props.value && this.props.value !== '') ?
                EditorState.createWithContent(convertStateFromHtml(this.props.value), new CompositeDecorator(decorators)) :
                EditorState.createEmpty(),
            imageUrl: '',
            toggledColor: '',
            isColorEditorBoxOpen: false,
            isAddImageUrlBoxOpen: false
        };
        this.editorRef = React.createRef();
    };

    componentDidMount() {
        this.props.toggleMessageTemplateText(false);
    };

    focus = () => this.editorRef.current.focus();

    onChange = (editorState, changeType, toggledColor) => {
        if (changeType === 'toggleTextColor') {
            if (this.state.toggledColor === toggledColor) {
                // Setting default color to black when previous state color and current state color is the same:
                this.setState(({ toggledColor: 'rgb(0, 0, 0)' }));
            } else {
                this.setState({ toggledColor });
            }
        }
        if (changeType !== 'toggleHtmlToText' && changeType !== 'toogleTextToHtml') {
            const nextContentState = convertStateToHtml(editorState);
            this.props.onChange(nextContentState.getPlainText());
        }
        this.setState({ editorState });
    };

    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    };

    toggleInlineType = (e, inlineStyle) => {
        e.preventDefault();
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle), 'toggleInlineStyle');
    };

    toggleBlockType = (e, blockType) => {
        e.preventDefault();
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType), 'toggleBlockType');
    };

    toggleAddImageUrlBox = (value) => this.setState(() => !value ? ({ isAddImageUrlBoxOpen: !this.state.isAddImageUrlBoxOpen }) : ({ isAddImageUrlBoxOpen: value }));

    getImageUrl = (e, addImageInptVal) => {
        e.preventDefault();
        this.setState({ imageUrl: addImageInptVal });
    };

    toggleImage = (e) => {
        e.preventDefault();
        const { editorState, imageUrl } = this.state;
        const contentStateWithEntity = editorState.getCurrentContent().createEntity(
            "image",
            "IMMUTABLE",
            { src: imageUrl }
        );
        const newEditorState = EditorState.set(
            editorState,
            { currentContent: contentStateWithEntity },
            "create-entity"
        );
        const nextEditorState = AtomicBlockUtils.insertAtomicBlock(newEditorState, contentStateWithEntity.getLastCreatedEntityKey(), " ");
        this.onChange(nextEditorState, 'toggleImage');
    };

    toggleColorEditorBox = () => {
        this.setState({ isColorEditorBoxOpen: !this.state.isColorEditorBoxOpen })
    };

    toggleColor = (e, toggledColor) => {
        e.preventDefault();
        const { editorState } = this.state;
        const selection = editorState.getSelection();

        // Let's just allow one color at a time. Turn off all active colors.
        const nextContentState = Object.keys(colorStyleMap)
            .reduce((contentState, color) => {
                return Modifier.removeInlineStyle(contentState, selection, color)
            }, editorState.getCurrentContent());

        let nextEditorState = EditorState.push(
            editorState,
            nextContentState,
            'change-inline-style'
        );
        const currentStyle = editorState.getCurrentInlineStyle();
        // Unset style override for current color.
        if (selection.isCollapsed()) {
            nextEditorState = currentStyle.reduce((state, color) => RichUtils.toggleInlineStyle(state, color), nextEditorState);
        }
        // If the color is being toggled on, apply it.
        if (!currentStyle.has(toggledColor)) {
            nextEditorState = RichUtils.toggleInlineStyle(
                nextEditorState,
                toggledColor
            );
        }
        this.onChange(nextEditorState, 'toggleTextColor', toggledColor);
    };

    toggleText = (e) => {
        e.preventDefault();
        const isStringInHtmlFormat = str => str.replace(/(<([^>]+)>)/ig, "") !== str;
        const { editorState } = this.state;
        const currentEditorText = editorState.getCurrentContent().getPlainText();
        if (isStringInHtmlFormat(currentEditorText)) {
            const nextContentState = convertStateFromHtml(currentEditorText);
            const nextStateEditor = EditorState.push(editorState, nextContentState, 'insert-characters');
            this.onChange(nextStateEditor, 'toggleHtmlToText');
            this.props.toggleMessageTemplateText(!this.props.isDisplayContentInHtml);
        } else {
            const nextContentState = convertStateToHtml(editorState);
            const nextEditorState = EditorState.push(editorState, nextContentState, 'insert-characters');
            this.onChange(nextEditorState, 'toogleTextToHtml');
            this.props.toggleMessageTemplateText(!this.props.isDisplayContentInHtml);
        }
    };

    render() {
        const { isDisplayContentInHtml } = this.props;
        const { editorState, toggledColor, isAddImageUrlBoxOpen } = this.state;
        // Gets current Inline style:
        const currentStyle = editorState.getCurrentInlineStyle();
        // Gets current block style:
        const selection = editorState.getSelection();
        const blockType = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();
        return (
            <div>
                <EditorContainer className="editorContainer" isDisplayContentInHtml={isDisplayContentInHtml} onClick={this.focus}>
                    <Editor
                        plugins={plugins}
                        ref={this.editorRef}
                        editorState={editorState}
                        onChange={this.onChange}
                        customStyleMap={colorStyleMap}
                        decorators={decorators}
                        blockRendererFn={blockRenderer}
                        readOnly={isDisplayContentInHtml}
                        handleKeyCommand={this.handleKeyCommand}
                    />
                    <ButtonWrapper>
                        <BoldSvgIcon
                            editorState={editorState}
                            active={currentStyle.has('BOLD')}
                            isDisplayContentInHtml={isDisplayContentInHtml}
                            onMouseDown={(e) => this.toggleInlineType(e, 'BOLD')}
                        />
                        <ItalicFontSvgIcon
                            editorState={editorState}
                            active={currentStyle.has('ITALIC')}
                            isDisplayContentInHtml={isDisplayContentInHtml}
                            onMouseDown={(e) => this.toggleInlineType(e, 'ITALIC')}
                        />
                        <UnderlineSvgIcon
                            editorState={editorState}
                            active={currentStyle.has('UNDERLINE')}
                            isDisplayContentInHtml={isDisplayContentInHtml}
                            onMouseDown={(e) => this.toggleInlineType(e, 'UNDERLINE')}
                        />
                        <TextColorSvgIcon
                            editorState={editorState}
                            currentStyle={currentStyle}
                            onClick={this.toggleColorEditorBox}
                            toggledColor={toggledColor}
                            isColorEditorBoxOpen={this.state.isColorEditorBoxOpen}
                            isDisplayContentInHtml={isDisplayContentInHtml}
                            onMouseDown={(e, toggledColor) => this.toggleColor(e, toggledColor)}
                        />
                        <LineBreaker />
                        <UnorderedListSvgIcon
                            editorState={editorState}
                            active={'unordered-list-item' === blockType}
                            isDisplayContentInHtml={isDisplayContentInHtml}
                            onMouseDown={(e) => this.toggleBlockType(e, 'unordered-list-item')}
                        />
                        <OrderedListSvgIcon
                            editorState={editorState}
                            active={'ordered-list-item' === blockType}
                            isDisplayContentInHtml={isDisplayContentInHtml}
                            onMouseDown={(e) => this.toggleBlockType(e, 'ordered-list-item')}
                        />
                        <ImageUploadSvgIcon
                            onClick={this.toggleAddImageUrlBox}
                            editorState={editorState}
                            active={'IMAGE' === blockType}
                            isAddImageUrlBoxOpen={isAddImageUrlBoxOpen}
                            isDisplayContentInHtml={isDisplayContentInHtml}
                        />
                        <ToggleTextSvgIcon
                            editorState={editorState}
                            onMouseDown={this.toggleText}
                            isDisplayContentInHtml={isDisplayContentInHtml}
                        />
                        <LineBreaker />
                        <HeaderSvgIcon
                            editorState={editorState}
                            blockType={blockType}
                            isDisplayContentInHtml={isDisplayContentInHtml}
                            onMouseDown={(e, headerType) => this.toggleBlockType(e, headerType)}
                        />
                    </ButtonWrapper>
                </EditorContainer>
                {isAddImageUrlBoxOpen && (
                    <AddImageComponent
                        onMouseDown={this.toggleImage}
                        retrieveInputValue={true}
                        getInputValue={(e, addImageInptVal) => this.getImageUrl(e, addImageInptVal)}
                        insertBtnClick={() => this.toggleAddImageUrlBox(false)}
                        cancelBtnClick={() => this.toggleAddImageUrlBox(false)}
                    />
                )}
            </div>
        );
    };
};