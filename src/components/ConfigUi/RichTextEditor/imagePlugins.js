import React from 'react';
import styled from 'styled-components';
import StyledInput from '../../General/Input';
import Modal from '../../ConfigUi/Modal';
import StyledButton from '../../ConfigUi/Button';

// Draft-js plugins to work with images:
import { composeDecorators } from 'draft-js-plugins-editor';
import createImagePlugin from 'draft-js-image-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();

const decorator = composeDecorators(
    focusPlugin.decorator,
    resizeablePlugin.decorator,
    blockDndPlugin.decorator
);

const imagePlugin = createImagePlugin({ decorator });

export const plugins = [
    focusPlugin,
    resizeablePlugin,
    blockDndPlugin,
    imagePlugin,
];

const ImageComponent = props => {
    const { block, contentState } = props;
    const entity = contentState.getEntity(block.getEntityAt(0));
    const { src } = entity.getData();
    if (entity.getType().toLowerCase() === 'image' && src !== undefined) {
        return <img src={src} />
    }
};

export const blockRenderer = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === 'atomic') {
        return {
            component: ImageComponent,
            editable: false,
        };
    }
};

export const decorators = [
    {
        strategy: (contentBlock, callback, contentState) => {
            contentBlock.findEntityRanges(
                (character) => {
                    const entityKey = character.getEntity();
                    return (
                        entityKey !== null &&
                        contentState.getEntity(entityKey).getType() === 'IMAGE'
                    );
                },
                callback
            );
        },
        component: (props) => {
            const { src } = props.contentState.getEntity(props.entityKey).getData();
            return (<img src={src} style={{ position: 'relative', width: '70%', marginTop: '10px', marginBottom: '10px' }} />)
        }
    },
];

// AddImageUrl Modal:
const AddImageUrlInput = styled(StyledInput)`
   border-style: solid;
   margin-top: 15px;
`;

const InsertImageButton = styled(StyledButton)`
  margin-top: 30px;
`;

const CancelImageInsertButton = styled(StyledButton)`
  margin-top: 30px;
  margin-left: 20px;
`;

const StyledLabel = styled.label`
  font-size: 14px
`;

export class AddImageComponent extends React.Component {
    render() {
        return (
            <Modal onMaskClick={this.props.insertBtnClick}>
                <StyledLabel>Paste an image URL here:</StyledLabel>
                <AddImageUrlInput retrieveInputValue={this.props.retrieveInputValue} getInputValue={(e, value) => this.props.getInputValue(e, value)} />
                <InsertImageButton
                    buttonType="primary"
                    disabled={false}
                    onMouseDown={this.props.onMouseDown}
                    onClick={this.props.insertBtnClick}
                >Insert
                </InsertImageButton>
                <CancelImageInsertButton
                    buttonType="secondary"
                    onClick={this.props.cancelBtnClick}
                >Cancel
                </CancelImageInsertButton>
            </Modal>
        )
    }
};