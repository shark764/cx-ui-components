# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.29.7] - 2018-11-14
### Added
- ToggleField now can receive title as parameter.

## [0.29.6] - 2018-11-12
### Fixed
- Removing onBlur event from props in InputField.

## [0.29.5] - 2018-11-08
### Fixed
- CXV1-15973 - AutoComplete was not allowing type blank spaces among the text.
- CXV1-16019 - Fill color for SVG in action buttons was loosing color on hover.
- InputText were not showing errors label.

## [0.29.4] - 2018-11-08
### Fixed
- CXV1-16004 - Suggestions were not showing filtered onfocus

## [0.29.3] - 2018-11-07
### Fixed
- CXV1-15973 - Suggestions dropdown were not being closed on click outside of the component.
- SuggestionsDropdown were being blocked by other panel when members table was empty.

## [0.29.2] - 2018-11-07
### Fixed
- remove autocomplete suggestions onBlur
- show an initial list of values on focus

## [0.29.1] - 2018-11-01
### Fixed
- Suggestions were not accessible by keydown event.
- Click on Suggestions was losing value after onBlur event fired.

## [0.29.0] - 2018-11-01
### Added
- Ability to use sidepanel table actions to associate or dissocitate entity list items

## [0.28.1] - 2018-10-24
### Changed
- CXV1-15842 - Changed behavior of sidepanel header toggle when user has just readonly permission.
- Disabling all radiobuttons when the entire field is disabled.

## [0.28.0] - 2018-10-19
### Added
- CXV1-15489 - Creating AutoComplete Component

## [0.27.0] - 2018-10-10
### Added
- Ability to add and create stories in storybook

## [0.26.1] - 2018-10-12
### Added
- Help text for inputText labels to show short description when is needed

## [0.26.0]
* <no-jira> - Added actions button to select all visible rows for bulk actions

## [0.25.1]
* <no-jira> - RadioButton not getting checked on parameter given.

## [0.25.0]
* <no-jira> - Added copy icon svg

## [0.24.0]
* CXV1-14879 - Support for bulk actions on main entity table

## [0.23.1]
* <no-jira> - Adding id/className attribute to filters on EntityTable and SidePanelTable.

## [0.23.0]
* CXV1-14893/CXV1-14891 - Added freeform list component / form builder component
* CXV1-14890 - Added color picker component

## [0.22.4]
* <no-jira> - Adding id/className attribute to list-item attribute.

## [0.22.3]
* <no-jira> - Adding id attribute to Create/Close/Submit/Cancel Buttons.

## [0.22.2]
* CXV1-15035 - Modify field components to be able to add id and/or className attributes.

## [0.22.1]
* CXV1-15041 - adjusting dynamic table size to better fit parent element

## [0.22.0]
* CXV1-15035 - Create RadioButton Component.

## [0.21.8]
* CXV1-14775 - add components to dependencies list 

## [0.21.7]
* CXV1-14775 - move components to peer and dev dependecies list 

## [0.21.6]
* remove un-needed console logs

## [0.21.5]
* CXV1-14932 - component tweaks and improvments for Outbound Identification Lists

## [0.21.4]
* CXV1-14874 - Move config-2 forms out of the component library and into config-2 repo.

## [0.21.3]
* CXV1-13462 - Added tooltip for List Names for creating and updating.

## [0.21.2]
* CXV1-14540 - Silent Monitoring - Groups and Skills UX issues

## [0.21.1]
* <no-ticket> - Fix "Loading..." option for list types in create list form

## [0.21.0]
* CXV1-12475 - Added outbound identifiers form and outbound identifiers side panel details

## [0.20.0]
* CXV1-13838 - Added shared toggle to list form

## [0.19.10]
* <no-ticket> - Fixed issue with same agent monitoring call twice caused react duplicate key error

## [0.19.9]
* CXV1-13328 - Fixed issue with Submit button not being grayed out when required fields have no value

## [0.19.8]
* CXV1-13345 - Apply hover accent color to table pagination buttons

## [0.19.7]
* CXV1-13425 - Added Entity Table hover via branding
* <no-ticket> - Fix for branding

## [0.19.6]
* CXV1-13849 - Changed the template text editor (used for email templates) regex to use triple curly brackets instead of double brackets and an ampersand

## [0.19.5]
* CXV1-13685 - Display as much of side panel details header as possible

## [0.19.4]
* CXV1-13761 - Remove getBranding from RootStyles. Allow loading SVG to be styled.

## [0.19.3]
* <No Jira> - Minor prop fixes for silent monitoring

## [0.19.2]
* <No Jira> - CSS and minor fixes to interaction monitoring after all the recent changes.

## [0.19.1]
* CXV1-13303 - Fix display for Email side panel when user does not have update permission

## [0.19.0]
* CXV1-12310 bulk lists components created and added to detail

## [0.18.0]
* CXV1-13300 - Email Templates Components

## [0.17.1]
* CXV1-13325 - Restyled confirm popup to match existing config-ui confirmation popups

## [0.17.0]
* CXV1-13326 - Fixed the build process and added silent monitoring components

## [0.16.0]
* CXV1-13325 - Added global confirmation modal

## [0.15.7]
* CXV1-13321 - Fixed table filters / cell values

## [0.15.6]
* CXV1-13448 - Generic Lists - Not Required number field requires a number to submit.
* CXV1-13424 - Generic Lists - Two Scroll bars Showing in Bottom of Side Panel

## [0.15.5]
* CXV1-13339 - Generic Lists - Booleans can't go back to no value

## [0.15.4]
* CXV1-13408 - Main Page Previous and Next buttons do not show when browser is made smaller.

## [0.15.3]
* CXV1-13400 - Inherited Toggles still firing click event
* CXV1-13399 - Toggles erroring when clicked
* CXV1-13377 - Long modal headers break structure
* CXV1-13364 - Table row number changes cause side panel header to change size
* CXV1-13325 - Column header minimum sizes
* CXV1-13321 - Main table cell tooltips
* CXV1-13400 - Help Icon not inline with table title

## [0.15.2]
* <no-ticket> - Form valiadtion fixes

## [0.15.1]
* <no-ticket> - Fixed duplicated inheritance prop

## [0.15.0]
* CXV1-13099 - More Inherited entity behaviour and more minor css things

## [0.14.0]
* CXV1-13099 - Inherited entity behaviour and minor css things

## [0.13.0]
* CXV1-13096 - Added Toasts
* CXV1-13100 - ThemeProvider updates for branding

## [0.12.0]
* CXV1-13102 - User permissions

## [0.11.0]
* CXV1-12285 - Delete List items

## [0.10.0]
* CXV1-13113 - Main Table column filters
* CXV1-13114 - Side Panel Table column filters

## [0.9.2]
* CXV1-13106 - Manage disabled state of submit button
* <no-ticket> - Added striped class to sub-entity table

## [0.9.1]
* CXV1-13308 - Selected Cell Outline Goes into Next Cell
* CXV1-13309 - Cells are way too big when viewing 5 rows
* CXV1-13310 - Toggle Looks Different Compared to Other Toggles
* CXV1-13312 - Help Button is not inline with the "Lists"
* <no-ticket> - Added striped class to EntityTable
