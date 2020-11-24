import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fromEvent } from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/map';

import GlobeIconSVG from '../../Icons/GlobeIconSVG';

const Container = styled.div`
    position: relative;
`;

const Popup = styled.div`
    position: absolute;
    bottom: 53px;
    left: 5px;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0 0 6px 1px rgba(0,0,0,0.29);
    margin: 10px;
    color: #4b4b4b;
    width: 200px;
`;

const Triangle = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    left: 22px;
    bottom: -7px;
    z-index: 1;
    border-width: 8px;
    border-style: solid;
    border-color: #FFF transparent transparent #FFF;
    transform: rotate(-134deg);
    box-shadow: -6px -6px 11px -4px rgba(0,0,0,0.29);
    border-radius: 3px
`;

const LanguagePickerSelectorWrapper = styled.div`
    width: 180px;
    top: 0;
    bottom: 10px;
    margin-left: 10px;
    border: none;
    height: 44px;
    background-color: #FFFFFF;
    color: #333;
    line-height: 44px;
`;

const Option = styled.div`
    padding: 0 10px;
    &:hover {
        background-color: #ebf5ff;
        cursor: pointer;
    };
    ${props => props.selected && 'background-color: #f5faff;'}
`;

const SelectedOption = styled.span`
    width: 155px;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
    white-space: nowrap;
`;

const ArrowZone = styled.div`
    width: 20px;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    padding-right: 5px;
    display: inline-block;
`;

const Arrow = styled.div`
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 2.5px;
    height: 0;
    width: 0;

    &:hover {
        border-color: #333 transparent transparent;
    }
`;

const LanguagePickerSelectorOptionsWrapper = styled.div`
    background-color: #ffffff;
    width: 200px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid #ccc;
    border-top-color: #e6e6e6;
    box-shadow: 0 1px 0 rgba(0,0,0,0.06);
    box-sizing: border-box;
    max-height: 200px;
    bottom: 80%;
    position: absolute;
    overflow-y: scroll;
    left: 0;
`;

export default class LanguagePicker extends React.Component {
    
    constructor() {
        super();
        this.state = {
            outsideClick: fromEvent(document, 'click')
                .map(({ target }) => {
                    if (!this.containerRef.current.contains(target)) {
                        this.setState({
                            showSelector: false,
                            showOptions: false
                        });
                    }
                })
                .subscribe(),
            showSelector: false,
            showOptions: false
        };

        this.selectedRef = React.createRef();
        this.containerRef = React.createRef();
    }

    componentDidUpdate(prevProps, { showOptions: prevShowOptions }) {
        if (this.state.showOptions !== prevShowOptions && !prevShowOptions && this.selectedRef.current) {
            this.selectedRef.current.scrollIntoView({ block: 'center' });
        }
    }

    componentWillUnmount() {
        this.state.outsideClick.unsubscribe();
    }

    toggleSelector = () => { 
        this.setState(({ showSelector: prevShowSelector, showOptions: prevShowOptions }) => ({
            showSelector: !prevShowSelector,
            showOptions: prevShowSelector ? false : prevShowOptions
        }));
    };

    toggleOptions = () => {
        this.setState(({ showOptions: prevShowOptions }) => ({
            showOptions: !prevShowOptions
        }));
    };

    render(){
        const { 
            props: {
                onLanguageChange,
                languageOptions,
                selectedLocale,
                color,
                hoverColor,
                className
            },
            state: {
                showOptions,
                showSelector
            } 
        } = this;

        return <Container
            innerRef={this.containerRef}
            className={className}
        >
            <GlobeIconSVG 
                onClick={this.toggleSelector}
                color={color}
                size={28}
                hoverColor={hoverColor}
            />
            {showSelector && 
                <Popup>
                    <Triangle />
                    <LanguagePickerSelectorWrapper>
                        {showOptions &&
                            <LanguagePickerSelectorOptionsWrapper>
                                {languageOptions.map(({ value, label }) => 
                                    <Option
                                        {...{
                                            onClick: () =>{ 
                                                onLanguageChange(value);
                                                this.toggleOptions();
                                            },
                                            selected: selectedLocale === value,
                                            key: value,
                                            ...(selectedLocale === value && { innerRef: this.selectedRef})
                                        }}
                                    >
                                        {label}
                                    </Option>)}
                            </LanguagePickerSelectorOptionsWrapper>
                        }
                        <div
                            onClick={this.toggleOptions}
                        >
                            <SelectedOption>
                                {languageOptions.find(function(option){
                                    return option.value === selectedLocale;
                                }).label}
                            </SelectedOption>
                            <ArrowZone>
                                <Arrow />
                            </ArrowZone>
                        </div>
                    </LanguagePickerSelectorWrapper>
                </Popup>}
        </Container>
    }
}

LanguagePicker.propTypes = {
    onLanguageChange: PropTypes.func.isRequired,
    languageOptions: PropTypes.array.isRequired,
    selectedLocale: PropTypes.string.isRequired,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    className: PropTypes.string
}