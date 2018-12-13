import React, {Component, Fragment} from 'react';
import { fromJS } from 'immutable';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { generateUUID } from 'serenova-js-utils/uuid';
import { Field as ReduxFormField } from 'redux-form/immutable';
import FieldWrapper from '../FieldWrapper';
import CloseIconSVG from '../../../SVGs/CloseIconSVG';
import { Input } from '../StyledInputs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const RemoveButton = styled.div`
display: inline-block;
float: right;
margin-left: 13px;
`;
const Grip = styled.div`
margin-top: 0px;
margin-right 14px;
display: inline-block;
`;

const InputWrapper = styled(Input)`
width: 90%;
margin: 5px 5%;
`;
const SmallInput = styled(Input)`
width: 200px;
height: 25px;
float: right;
`;

const ListWrapper = styled.div`
width: 100%;
padding: 10px 0px;
`;

const StyledSelect = styled.select`
display:inline-block;
background: white;
width: 90px;
margin-bottom: 5px;
height: 25px;
padding-left: 10px;
font-size: 13px;
border: 1px solid #80808038;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset,
  0 -1px 0 rgba(0, 0, 0, 0.05) inset;

&::placeholder {
  color: #404040;
}

&:focus {
  outline: 0;
  border-color: #3498db;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
`;
const StyledRegion = styled.select`
display:inline-block;
background: white;
width: 200px;
margin-bottom: 5px;
height: 25px;
padding-left: 10px;
font-size: 13px;
border: 1px solid #80808038;
float: right;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset,
  0 -1px 0 rgba(0, 0, 0, 0.05) inset;

&::placeholder {
  color: #404040;
}

&:focus {
  outline: 0;
  border-color: #3498db;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}

`;


const ListItem = styled.div`
margin: 10px 0px;
padding: 15px 0px;
background: white;
`;

const ListItemText = styled.span`
background: white;
display: inline-block;
margin: 0px 10px;
`;
const PrimaryText = styled.span`
background: white;
display: inline-block;
margin: 0px 10px;
font-style: italic;
color: #808080a8;;
`;

const Seperator = styled.span`
display: inline-block;
width: 100%;
border-top: 2px dashed #80808054;
`;

const ErrorInExtension = styled.span`
color: red;
font-style: italic;
text-align: center;
display: inline-block;
width: 100%;
`;

class ExtensionListInput extends Component {

    constructor(props) {
      super(props);
      this.state = {
        dragging: false,
      };
    }

    emptyListItem = () => ({
      type:'pstn',
      value:'',
      provider:'',
      region:'',
      description:'',
      id: generateUUID()
    });

    isLastItem = index => index === this.props.input.value.size - 1;

    saveRefrence = ({target: {value}}, type, index) => {
      this.props.input.onChange(this.props.input.value.setIn([index, type], value));
    }

    addFormItem = e => {
      e.preventDefault();
      this.props.input.onChange(this.props.input.value.push(fromJS(this.emptyListItem())))
    }

    removeListItem = index => {
      this.props.input.onChange(this.props.input.value.delete(index));
    }

    onDragStart = () => {
      this.setState({dragging: true})
    }

    onDragEnd = result => {
      const {destination, source} = result;
      const lastItemIndex = this.props.input.value.size - 1;
      if(!destination) {
        this.setState({dragging: false});
        return;
      }
      if(destination.index === lastItemIndex) {
        this.setState({dragging: false});
        return;
      }
      if(destination.droppableId === source.droppableId && destination.index === source.index) {
        this.setState({dragging: false});
        return;
      }
      const orderSwapped = this.props.input.value.delete(source.index).insert(destination.index, this.props.input.value.get(source.index));

      if(this.isLastItem(source.index)) {
        this.setState({dragging: false})
        this.props.input.onChange(orderSwapped.push(fromJS(this.emptyListItem())));
      } else {
        this.setState({dragging: false})
        this.props.input.onChange(orderSwapped);
      }
    }

    render() {
      return (
        <FieldWrapper
          inputName={this.props.input.name}
          label={this.props.label}
          touched={this.props.touched}
          error={this.props.error}
          warning={this.props.warning}
          hideLabel
        >

          {this.props.input.value && this.props.input.value.size > 0 &&
          <ListWrapper type={this.props.input.name}>
            <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
              <Droppable droppableId={this.props.input.name}>
                {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {this.props.input.value && this.props.input.value.map((li,index) =>
                  (<Draggable draggableId={li.get('id') || generateUUID()} index={index} key={li.get('id') || generateUUID()}>
                    {(provided) => (
                      <Fragment>
                        {this.isLastItem(index) && !this.state.dragging && <Seperator />}
                        <ListItem innerRef={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>

                          <Grip className="list-item-grip-icon">:::</Grip>

                          <StyledSelect
                            className="list-item-text"
                            onChange={e => this.saveRefrence(e,'type',index)}
                            value={li.get('type')}
                            disabled={li.get('type') === 'webrtc'}
                          >
                            <option value="pstn">PSTN</option>
                            {li.get('type') === 'webrtc' && <option value="webrtc">webRTC</option>}
                            <option value="sip">SIP</option>
                          </StyledSelect>

                          {li.get('type') === 'webrtc' && <ListItemText className="list-item-text"> {li.get('provider')} </ListItemText>}

                          {index === 0 && <PrimaryText className="list-item-text"> primary </PrimaryText>}

                          <RemoveButton
                            className="list-item-remove-button"
                            onClick={e => li.get("type") !== 'webrtc' && (this.isLastItem(index) ? this.addFormItem(e) : this.removeListItem(index))}
                            style={this.isLastItem(index)? {transform: 'rotate(45deg)'} : {}}
                          >
                            <CloseIconSVG closeIconType={this.isLastItem(index)? "primary" : "secondary"} size={12} disabled={li.get('type') === 'webrtc'}/>
                          </RemoveButton>

                          {li.get('type') === 'webrtc' &&
                            <StyledRegion
                                className="list-item-text"
                                onChange={e => this.saveRefrence(e,'region',index)}
                                value={li.get('region')}
                              >
                                <option label="Tenant Default Region" value="default"></option>
                                <option label="Global Low Latency" value="gll"></option>
                                <option label="Australia" value="au1"></option>
                                <option label="Brazil" value="br1"></option>
                                <option label="Ireland" value="ie1"></option>
                                <option label="Japan" value="jp1"></option>
                                <option label="Singapore" value="sg1"></option>
                                <option label="US East Coast (Virginia)" value="us1"></option>
                                <option label="Virginia Interconnect" value="us1-tnx"></option>
                                <option label="Oregon Interconnect" value="us2-tnx"></option>
                                <option label="Germany" value="de1"></option>
                                <option label="Ireland Interconnect" value="ie1-tnx"></option>
                              </StyledRegion>
                          }

                          {li.get('type') !== 'webrtc' &&
                            <SmallInput
                              className="list-item-text"
                              value={this.props.input.value.getIn([index, 'value'])}
                              onChange={e => this.saveRefrence(e,'value',index)}
                              placeholder="Extension"
                              hasError={ this.props.meta.error && typeof this.props.meta.error[index] === 'string' && this.props.meta.error[index] !== 'Label is required'}
                          />}

                          <InputWrapper
                            className="list-item-text"
                            value={this.props.input.value.getIn([index,'description'])}
                            onChange={e => this.saveRefrence(e,'description',index)}
                            placeholder="Label"
                            disabled={li.get('type') === 'webrtc'}
                            hasError={ this.props.meta.error && typeof this.props.meta.error[index] === 'string' && this.props.meta.error[index] === 'Label is required'}
                          />

                          {this.props.meta.error &&
                          typeof this.props.meta.error[index] === 'string' &&
                          <ErrorInExtension>{this.props.meta.error[index]}</ErrorInExtension>}

                        </ListItem>
                      </Fragment>
                    )}
                    </Draggable>
                  )
                )}
                {provided.placeholder}
                </div>)}
              </Droppable>
            </DragDropContext>
          </ListWrapper>}

        </FieldWrapper>

      );
    }
}




export default function ExtensionListField(props) {
  return <ReduxFormField {...props} component={ExtensionListInput} />;
}

ExtensionListField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

ExtensionListField.defaultProps = {
  disabled: false,
}

ExtensionListInput.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  touched:  PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.string,
};
