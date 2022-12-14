# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.69.8] - 2021-08-06
### fixed
- <no-Jira> - Config-2 | Made css changes to StyledInput and AutoCompleteField.

## [0.69.7] - 2021-06-01
### fixed
- CXV1-24272 - Config-2 | Capacity Rules controls are displayed when viewing a publish version.

## [0.69.6] - 2021-05-31
### fixed
- <no-ticket> - Disabled onClick in track for Slider so it can only be draggable.

## [0.69.5] - 2021-05-28
### fixed
- <no-ticket> - Using onClick handler first time, doesn't set the right initial max value as requirements when not using the slider

## [0.69.4] - 2021-05-28
### fixed
- CXV1-26889 - Max Channel Dropdown is not setting the right Max value when clicking directly in Slider track

## [0.69.3] - 2021-05-25
### fixed
- CXV1-26889 - Max Channel Dropdown is disabled in all channels when weight is > 50

## [0.69.2] - 2021-05-24
### fixed
- CXV1-24359 - CapacityRuleSliderField onAfterChange was not triggered because of wrong validation

## [0.69.1] - 2021-05-21
### fixed
- CXV1-24359 - Minor css improvements and fix for max voice channel capacity SVG icon in CapacityRuleSliderField

## [0.69.0] - 2021-05-20
### added
- CXV1-26873 - Changes to FileUploadField to allow audio files

## [0.68.0] - 2021-05-11
### added
- CXV1- 24359 - Max Channel Dropdown / Integration with Slider Component
              - Tooltip Added
              - MaxIndicator SVG added
              - CapacityRuleSliderField added

## [0.67.6] - 2021-03-29
### added
- CXV1- 24131 - Agent State Monitor - Revert 0.67.5 changes - add scrollbar to dropdown menu

## [0.67.5] - 2021-03-26
### added
- CXV1- 24131 - Agent State Monitor - Add scrollbar to dropdown filters.

## [0.67.4] - 2021-03-09
### added
- no-jira - Added automation element identifier for business hours v2

## [0.67.3] - 2021-02-24
### Fixed
- CXV1-23805 - Agent State Monitoring Drop Down Filter views are truncated

## [0.67.2] - 2021-02-23
### Added
- <no-jira> - Fix on BusinessHoursRule end date picker placeholder

## [0.67.1] - 2021-02-18
### Added
- CXV1-23868 - Fix on BusinessHoursRuleField component regarding the onBlur action provided by redux-form

## [0.67.0] - 2021-02-03
### Added
- CXV1-23859 - Capacity Rule by Percentage - Slider Field Component.

## [0.66.3] - 2021-02-0
### Added
- <no-jira> - Added prop so the SidePanelTable can get the header for Actions column

## [0.66.2] - 2021-02-02
### Fixed
- CXV1-23860 - The Business hour component shows an end date of current date for a rule with no end date on view-mode

## [0.66.1] - 2021-01-28
### Fixed
- <no-jira> - Added heading to BarChart component.

## [0.66.0] - 2021-01-22
### Added
- CXV1-23609 - Slider component.

## [0.65.4] - 2021-01-19
### Fixed
- <no-jira> - other minor fixes to Capacity Rule Field

## [0.65.3] - 2021-01-19
### Fixed
- <no-jira> - Minor fix to Capacity Rule Field
## [0.65.2] - 2021-01-19
### Added
- <no-Jira> - Made css chnages to forecast dashboards entity dependent components.

## [0.65.1] - 2021-01-18
### Fixed
- <no-jira> - Exporting Capacity Rule Field

## [0.65.0] - 2021-01-11
### Added
- CXV1-16888 - Config 2 | Capacity Rules - Rule creation component (subEntity Form).

## [0.64.6] - 2020-11-26
### Fixed
- CXV1-23252 - Column Names in entyity table & columnFilterMenu are not identical in businessHoursV2 (Timezone/Timezone2 & Shared/Shared2).

## [0.64.5] - 2020-11-19
### Added
- CXv1-22919 - Config 2 - Language Preference Button
- <no-jira> - GlobeIconSVG Component

### Fixed
- <no-jira> - Fixed some issues with SettingIconSVG

## [0.64.4] - 2020-11-09
### Added
- <no-jira> - Cleaning Business Hours Rule Component Warnings

## [0.64.3] - 2020-11-09
### Added
- <no-jira> - Fix in ExtensionListField and adding new placeholder prop to SelectField

## [0.64.2] - 2020-10-30
### Added
- <no-jira> - Adding new props to ExtensionListField (canUpdateRegion and placeholders)

## [0.64.1] - 2020-10-30
### Changed
- CXV1-18676 - Add a label from props to FileDownload and validate file type in FileUploadField.

## [0.64.0] - 2020-10-23
### Added
- CXV1-23290 - Add LineChart component for Forecast dashboards.
- CXV1-23289 - Add RefreshIconSVG component.

## [0.63.3] - 2020-10-22
### Fixed
- <no-jira> - Rule component fixes related to CXV1-23253 (Day input in Business Hours rule creation allow values greater than 31 and negatives.)

## [0.63.2] - 2020-10-07
### Added
- CXV1-23080 - Reporting Components - Build PieChart Component
- CXV1-23081 - Reporting Components - Build Widget Component
- CXV1-23078 - Reporting Components - Build BarChart Component

## [0.63.1] - 2020-10-05
### Changed
- <no-jira> - New changes on how ExtensionListField handles errors

## [0.63.0] - 2020-09-25
### Added
- <no-jira> - User Icon added
### Changed
- <no-jira> - Minor changes on ExtensionField component

## [0.62.0] - 2020-09-25
### Added
- CXV1-23079 - Reporting Components - Build Gauge Component

## [0.61.30] - 2020-08-31
### Fixed
- <no-Jira> - Removing "class" attribute from SVG path tags.

## [0.61.29] - 2020-08-24
### Fixed
- CXV1-22923 - Twilio extension displayed in User Management UI when WebRTC is disabled in Twilio Integration

## [0.61.28] - 2020-08-24
### Fixed
- CXV1-16097 - Pagination table show more rows than actual count of items (not valid issue anymore,
               however, dynamic pagination options was set to show only page numbers closest to data length)

## [0.61.27] - 2020-08-13
### Changed
- <no-Jira> - Removed Loading Component from EntityTable as it is not comptabile with all the entity pages.

## [0.61.26] - 2020-08-13
### Changed
- <no-Jira> - Adding autoComplete prop to input field

## [0.61.25] - 2020-08-07
### Changed
- <no-Jira> - Added LodingComponent to EntityTable component.

## [0.61.24] - 2020-07-30
### Changed
- CXV1-20512 - Disable "unselect All" & "unselect all visible" in bulk actions when there are no active selected items.

## [0.61.23] - 2020-07-29
### Changed
- <no-jira> - Add labelWidth prop to InputField, SelectField.
- <no-Jira> - Add allowCreateListItem custom element to TransferListField component.

## [0.61.22] - 2020-07-21
### Changed
- <no-jira> - Fix display problem when switch from contact attribute to other pages.

## [0.61.21] - 2020-07-21
### Changed
- CXV1-20515 - Fix Typeahead & Autocomplete components

## [0.61.20] - 2020-07-13
### Changed
- <no-jira> - Removing legal disclaimer urls.

## [0.61.19] - 2020-07-15
- CXV1-22497 - Flow Management in Config 2 missing options to open versions in a new tab/window

## [0.61.18] - 2020-07-13
- <no-jira> - Adjust entity table to make it works with contact attributes.

## [0.61.17] - 2020-07-07
- CXV1-22813 - copy button is missing in editing a draft

## [0.61.16] - 2020-07-02
- CXV1-22700 - Draft shouldn't save when clicking on "Add Rule" button on a rule

## [0.61.15] - 2020-06-25
- CXV1-22703 - Fix validation for View Action Button regarding users that do not have MANAGE_ALL_BUSINESS_HOURS while checking an inherited business hour.

## [0.61.14] - 2020-06-25
- CXV1-22703 - Issues regarding users that do not have MANAGE_ALL_BUSINESS_HOURS while checking an inherited business hour.

## [0.61.13] - 2020-06-22
- CXV1-22705 - Display more prominently which version you're viewing and show the version number.

## [0.61.12] - 2020-06-19
- CXV1-22716 - Make the endDate field on the rule component to have a minimun selectable date of the rule's startDate plus one day

## [0.61.11] - 2020-06-16
- <no-jira> - Mask the input field values with bullet points when maskValue prop is set to true.

## [0.61.10] - 2020-06-08
- <no-jira> - Apply default theme branding values when tenant branding is updated.

## [0.61.9] - 2020-05-28
- <no-jira> - Typo errors in business rule component.

## [0.61.8] - 2020-05-28
- <no-jira> - Make platform tenant non editable in the entity table during bulk actions.

## [0.61.7] - 2020-05-28
- <no-jira> - Fix to endDate field so it gets resetted to undefined when selecting "None" on the "End" selector of the Business Hour Rule component

## [0.61.6] - 2020-05-27
- <no-jira> - Fix to Every field so it gets parsed to an integer on Business Hours Rule component

## [0.61.5] - 2020-05-26
- <no-jira> - Minor fix to Business Hour Rule Component

## [0.61.4] - 2020-05-26
- <no-jira> - Fixes to Business Hour Rule Component

## [0.61.3] - 2020-05-25
- <no-jira> - Fixes to the "On" field of Business Hour Rule Component so it now accurately shows errors

## [0.61.2] - 2020-05-21
- CXV1-22510 - Fixes to rule component for one-time rules and SidePanelTable component

## [0.61.1] - 2020-05-18
- <no-jira> - Adding viewOnly prop to businessHours redux-form field
- <no-jira> - Fixing an css issue with break-word property and the MixCalendar and Business Hours Rule components

## [0.61.0] - 2020-05-12
- <no-ticket> - Added file upload field component

## [0.60.10] - 2020-05-12
- <no-jira> - Fix to Busines Hours rule when clicking on context menu to perform an action
- <no-jira> - Fix to DatePicker component that would show the DayPicker smaller than it should be

## [0.60.9] - 2020-05-07
- <no-ticket> - Fix to Business Hours Rule component when used as a redux-form field

## [0.60.8] - 2020-04-30
## Fixed
- <no-ticket> - BigCalendar popup removed since is not compatible with Config2
              - ShowMore was added to display selected day on "show more" link
              - All day events padding removed since it was misplacing other events

## [0.60.7] - 2020-04-30
## Fixed
- <no-ticket> - Busines Rule Component validation added on endDate when one-time event type selected
              - Hide Sections List when no events available or empty list on calendar
              - Placeholder on endDate removed when field is disabled

## [0.60.6] - 2020-03-28  
## Fixed
- CXV1-22314 - Disposition list in config ui and in skylight size adjustment.

## [0.60.5] - 2020-04-27
## Fixed
- CXV1-22156 - Recurring Event List for Calendar not displaying in same day
             - Popup to show more events when event list exceeds cell height
             - Fixed Business Rule Component title when name was long (more width and ellipsis added)

## [0.60.4] - 2020-04-17
## Fixed
- CXV1-22156 - Recurring Event List for Calendar - Business Hours Page
             - Fixed Business Rule Component based on the recent changes in documentation

## [0.60.3] - 2020-04-07
## Fixed
- CXV1-13335 - Generic Lists - List and list item filters should have a placeholder to know what they are for

## [0.60.2] - 2020-04-06
## Fixed
- <no-ticket> -- background property value fixed for Name field in BusinessRule component

## [0.60.1] - 2020-04-06
## Fixed
- <no-ticket> - BusinessRule component WeekdayPicker was not disabled when component was set as disabled
              - background for Name field in BusinessRule component was overwritten by config-2

## [0.60.0] - 2020-03-30
## Fixed
- CXV1-21299 - BusinessRule component endDate not editable when coming from the api.
## Aded
             - Validations added to all inputs in BusinessRule component and BusinessRuleField
             - SVG icons added for BusinessRule types
             - Viewonly mode added
             - Calendar onNavigate and onView handlers added

## [0.59.2] - 2020-03-23
## Fixed
- CXV1-21299 - Fixes to Calendar Component and FullPage Detail Wrapper.

## [0.59.1] - 2020-03-11
## Fixed
- CXV1-21299 - Export of SmallCalendar, BigCalendar and MixCalendar components.

## [0.59.0] - 2020-03-11
## Added
- CXV1-21299 - Added SmallCalendar, BigCalendar and MixCalendar components.

## [0.58.0] - 2020-03-05
## Added
- CXV1-21297 - Build Rule Component.

## [0.57.1] - 2020-02-19
## Fixed
- CXV1-21529 - Unable to add inherited Presence Reasons List to agents.

## [0.57.0] - 2020-02-12
## Added
- CXV1-21361 - Added Weekday picker

## [0.56.28] - 2020-02-04
## Added
- <no-jira> - Added custom with to FieldWrapper component & fixed prop required console error of Toggle component

## [0.56.27] - 2020-01-29
## Added
- <no-jira> - Added data-automation tags to the ExtensionListField component.

## [0.56.26] - 2020-01-15
## Fixed
- CXV1-21153 - Adding URL validation to ListField component.

## [0.56.25] - 2020-01-07
## Fixed
- CXV1-15075 - UI showing Roles and Permissions that you do not have permission to assign to a user.

## [0.56.24] - 2020-01-07
## Fixed
- <no-jira> - Fixed an issue with webpack and serenova-js-utils that broke the development server

## [0.56.23] - 2020-01-07
## Added
- CXV1-11439 - Adding onChange prop to SelectField component.

## [0.56.22] - 2019-12-16
## Fixed
- <no-jira> - Another css fix in reasonLists and transferLists components

## [0.56.21] - 2019-12-16
## Fixed
- <no-jira> - Fixed reasonLists component padding & background

## [0.56.20] - 2019-12-12
## Fixed
- <no-jira> - Fixed duplicate updating Id in the url.

## [0.56.19] - 2019-12-11
## Fixed
- CXV1-20921 - Transfer list component is not keeping order of items with sortOrder attribute.

## [0.56.18] - 2019-12-04
## Fixed
- CXV1-20905 - Clicking Select All action throws an error when performing bulk actions.

## [0.56.17] - 2019-12-04
## Fixed
- CXV1-20612 - Remove entityId from the URL when navigated between pages
- CXV1-20611 - Display sidepanel entity form while accessing config-ui & config2 URL with id

## [0.56.16] - 2019-12-03
## Fixed
- <no-jira> - Dispositions component shouldn't allow inherited entities to edit or remove items.

## [0.56.15] - 2019-12-03
## Fixed
- CXV1-20570 - Modifying Nested list component for Transfer List to reuse it in Disposition Lists form.

## [0.56.14] - 2019-12-03
## Fixed
- CXV1-20647 - wrong descriptions for  Extensions | user page | config - ui 2

## [0.56.13] - 2019-11-28
## Fixed
- CXV1-20875 - Add confirmation when form is dirty and a second row is clicked.

## [0.56.12] - 2019-11-20
## Fixed
- <no-jira> - Non-inherited entities were not available for bulk actions.

## [0.56.11] - 2019-11-19
## Fixed
- CXV1-20460 - Transfer Lists component | User without Permissions is able to remove contacts.
- CXV1-20641 - Clicking on action button cancels paging settings

## [0.56.10] - 2019-11-13
## Fixed
- Made ColorField disable-able and fixed some overlap issues

## [0.56.9] - 2019-11-12
## Fixed
- Added some more data-automation labels

## [0.56.8] - 2019-11-12
## Fixed
- CXV1-20600 - paging | user page | config -UI 2

## [0.56.7] - 2019-11-07
## Added
- <no-jira> - added data-automation to clickMask

## [0.56.6] - 2019-11-06
## Added
- CXV1-20596 - Pass config2 selectedEntityId param to config-ui URL

## [0.56.5] - 2019-11-06
## Added
- <no-jira> - added data-automation to checkBoxField component

## [0.56.4] - 2019-11-05
## Fixed
- CXV1-20574 - Closing SidePanel Form should display a confirmation warning.

## [0.56.3] - 2019-11-01
## Fixed
- CXV1-20518 - Diaplay confirmation modal before submitting bulk actions form.
- <no-jira> -  Update node from v8.11.3 to v10.5.0.

## [0.56.2] - 2019-11-01
## Fixed
- CXV1-20236 - Display entity ID's in the URL.

## [0.56.1] - 2019-10-31
## Changed
- <no-jira> - Changing warning text color for panel message component.

## [0.56.0] - 2019-10-24
## Fixed
- CXV1-20262 - Updated the display text whenn you hover over a copy button on flows page.

## [0.55.11] - 2019-10-23
### Fixed
- <no-jira> - Added some more data-automation labels.

## [0.55.10] - 2019-10-23
### Fixed
- CXV1-20382 - Fixing Ireland twilio ID region.
- CXV1-20381 - Adding item on modal was showing a smaller table instead of using whole boundary.

## [0.55.9] - 2019-10-23
## Fixed
- CXV1-20321 - Unable to delete a new reasonlistItem.

## [0.55.8] - 2019-10-22
### Fixed
- <no-jira> - remove horizontal scroll for NestedFieldList

## [0.55.7] - 2019-10-22
### Fixed
- CXV1-20326 - paging in adding exception in business hours

## [0.55.6] - 2019-10-15
### Added
- <no-jira> - Automation labels added || Part II

## [0.55.5] - 2019-10-11
### Added
- <no-jira> - Automation labels added

## [0.55.4] - 2019-10-10
### Fixed
- CXV1-20232 - Fixed Pagination DropDown on Side panel

## [0.55.3] - 2019-10-10
### Fixed
- CXV1-20234 - Fixed the dropdown for pagination

## [0.55.2] - 2019-10-08
### Fixed
- <no-jira> - Updated TransferList & Presence Reasons List UI

## [0.55.1] - 2019-10-04
### Fixed
- <no-jira> - Adding confirmation dialog when attempt to cancel a dirty form.
### Fixed
- CXV1-20194 - Missing hover labels on sidepanel table fields.

## [0.55.0] - 2019-09-30
### Added
- CXV1-19735 - Added Typing indicator. Renamed "SVGs" folder to "Icons".

## [0.54.0] - 2019-09-25
### Added
- <no-jira> - CheckList and Filter Icon components.
### Changed
- CXV1-19972 - Agent State Monitoring - No visual feedback on when a filter is selected.
- CXV1-19967 - Bulk Action filter selection becomes a Check All/Uncheck All component.

## [0.53.1] - 2019-09-05
### Fixed
- <no-jira> - Hiding action buttons on nested list component when user has no permissions to edit it

## [0.53.0] - 2019-09-02
### Added
- CXV1-16887 - Config 2 | Presence Reasons Lists - Nested list component

## [0.52.0] - 2019-09-04
### Added
- <no-jira> - Adding EyeIcon for ApiKey Form.
### Changed
- <no-jira> - Confirmation component change size and add children prop added.

## [0.51.0] - 2019-08-30
### Added
- CXV1-18685 - Message Templates component RichText Editor.

## [0.50.0] - 2019-08-29
### Added
- CXV1-18753-Added-WordWrapIcon.
- CXV1-18685 - Message Templates component RichText Editor.

##[0.49.3] - 2019-08-28
### Changed
- <no-jira> - Fixing an issue with TimepickerField and DatepickerField not updating the touched flag

##[0.49.2] - 2019-08-27
### Changed
- <no-jira> - Adding animation to ChannelType icon.
- <no-jira> - Fixing dropdown filter to accept customization and dispatch action when "All" is selected.

##[0.49.1] - 2019-08-22
### Changed
- <no-jira> - Adding classNames to menu and SVG components to allow customs styles from Config-UI2.
- <no-jira> - Fixing hover color on SVG components.

##[0.49.0] - 2019-08-19
### Fixed
- CXV1-19185 - Update WebRTC Region Support

## [0.48.1] - 2019-08-13
## Fixed
- <no-ticket> - Cleaning code and fixing some little issues with DatepickerField component

## [0.48.0] - 2019-08-12
### Added
- <no-ticket> - Pagination component for Entity, Sidepanel and reporting tables.
## Fixed
- <no-ticket> - Fixing styles for popover dialog position.

## [0.47.0] - 2019-08-09
## Fixed
- <no-ticket> - Fixing required props in Agent Monitoring Details component.

## [0.46.0] - 2019-08-08
### Added
- CXV1-18908 - Direction column and change-direction component
- CXV1-18909 - Presence State column and change-state component
- <no-jira> - Icons, Popup dialog, Menu components from Agent-Desktop

## [0.45.0] - 2019-08-08
- <no-ticket> - new Datepicker react library to create Datepicker Field component.

## [0.44.2] - 2019-08-01
## Fixed
- <no-ticket> - Fixed error not following the correct path to export TimepickerField and DatepickerField

## [0.44.1] - 2019-08-01
## Fixed
- <no-ticket> - Fixed error not expoting new component (Timepicker, TimepickerField and DatepickerField)

## [0.44.0] - 2019-07-17
### Added
- CXV1-18861 - CX-UI Components | Create Timepicker Component

## [0.43.0] - 2019-07-03
### Added
- CXV1-18860 - CX-UI Components | Create Datepicker component

## [0.42.0] - 2019-07-18
### Added
- New conversion function for statistics format.
### Fixed
- Filter columns dropdown was not showing correct width.

## [0.41.0] - 2019-07-05
### Added
- Warning message component for SidePanelDetails.
- Password type for Input component.

## [0.40.3] - 2019-06-20
### Fixed
- small changes made in TransferList Field component

## [0.40.2] - 2019-06-05
### Fixed
- Fixed some issues with the typeahead component that were causing the component's state to change frequently and bundling this changes making it slow.

## [0.40.1] - 2019-06-03
### Fixed
- Fixed som UI/UX issues on the typeahead component

## [0.40.0] - 2019-05-23
### Added
- Added TransferList and checkbox Field components.

## [0.39.2] - 2019-05-14
### Fixed
- Added year manualy to the copyright section.

## [0.39.1] - 2019-05-09
### Fixed
* Minor fixes and refactoring on typeahead component.


## [0.39.0] - 2019-04-17
### Added
* performant auto-suggest component

## [0.38.1] - 2019-05-02
### Added
- Bumping version to fix creating tag stage in jenkins pipeline.

## [0.38.0] - 2019-04-04
### Added
- CXV1-17550 - Added Legalcopyrights and Logos to the components.

## [0.37.4] - 2019-04-23
### Fixed
- CXV1-16854 - Columns in sidepanel table are now accepting custom width.

## [0.37.3] - 2019-03-29
### Fixed
- CXV1-16902 - Dropdown component is no longer throwing issues when empty option is selected.
- Actions in SidePanel table rows are not disabled when an item is pending response from API.

## [0.37.2] - 2019-03-22
### Fixed
- SidePanel Table Actions now can show a view action if user has view-only permissions.

## [0.37.1] - 2019-03-12
### Fixed
- CXV1-17241 - Rows dropdown selection on EntityTable now shows default page size properly.
### Changed
- Version bump js-utils library to 1.6.4.

## [0.37.0] - 2019-03-11
### Added
* CXV1-16219 - Simple Input component

## [0.36.8] - 2019-03-08
### Fixed
* removed unneeded bulkaction check for table row selector

## [0.36.7] - 2019-03-08
### Fixed
* removed unneeded bulkaction check for actions menu

## [0.36.6] - 2019-03-08
### Fixed
* Move alpha flag for bulk actions button and replace it with a new boolean prop

## [0.36.5] - 2019-03-06
### Fixed
* ConfirmationWrapper change the logic for the arrow function when user delete outbound identifier lists.
* CXV1-17194 - Config 2 - Outbound Identifiers "This cannot be undone" warning appears when deleting Outbound identifier lists.

## [0.36.4] - 2019-03-06
### Changed
- CXV1-16217 - LoadinSpinnerSVG color is customizable

## [0.36.3] - 2019-02-27
### Fixed
- SidePanel Table Column definition now accepts custom sort method.
- Entity Tables now restrict pagination options according to length of data.

## [0.36.2] - 2019-02-22
### Fixed
- Datetime columns now are sorted properly.
- SidePanel Tables now accept array for custom default sorted.
- SidePanel Tables now restrict pagination options according to length of data.

## [0.36.1] - 2019-02-20
### Fixed
- Datetime fields now can be filtered on SidePanelTable.
- Datetime columns show complete format (date + time).

## [0.36.0] - 2019-02-14
### Added
- Dialog was added to avoid deleting items without confirmation.
- Added format to sidepanel table cells.

## [0.35.1] - 2019-02-13
### Changed
- CXV1-16890, CXV1-16891 - Update button now passes row data as parameter to handler.

## [0.35.0] - 2019-02-12
### Added
- Export checkbox component

## [0.34.0] - 2019-02-08
### Added
- CXV1-16890, CXV1-16891 - New copy and view buttons, needed for Flows page sidepanel actions.

## [0.33.0] - 2019-02-07
### Added
- Entity table now accepts default sorting values

## [0.32.15] - 2019-02-04
### Changed
- Confirmation dialog is now displayable conditionally to avoid a re-render of wrapped element.

## [0.32.14] - 2019-01-31
### Fixed
- Toggle is setting undefined in onChange handler when field is disabled.

## [0.32.13] - 2019-01-29
### Changed
- CXV1-16878 - Added prop to receive 'disabled' parameter for toggle in SidePanelHeader.

## [0.32.12] - 2019-01-29
### Changed
- CXV1-16866 - Added confirmation dialog to item toggle status on sidepanel table.

## [0.32.11] - 2019-01-21
### Fixed
- CXV1-16398 - Added loading state for pending sidepanel actions

## [0.32.10] - 2019-01-21
### Fixed
- CXV1-16776 - Editable input is not disappearing if value is removed for proficiency column.

## [0.32.9] - 2019-01-18
### Fixed
- Bump version to fix jenkins build failing.

## [0.32.8] - 2019-01-18
### Fixed
- CXV1-16776 - Editable column now renders if column is editable and has a proper value.

## [0.32.7] - 2019-01-17
### Fixed
- CXV1-16776 - Proficiency column now shows editable input only if skill needs a value.

## [0.32.6] - 2019-01-09
### Changed
- Changed the look and feel of the users extensions component.
### Fixed
- Can now click the action button in detail header and it will not submit when in a form

## [0.32.5] - 2018-12-19
### Fixed
- CXV1-16416 - Suggestions were not being displayed on creating after first focus on AutoComplete.

## [0.32.4] - 2018-12-18
### Changed
- Changed editable field to use html5 input type

## [0.32.3] - 2018-12-06
### Fixed
- Ability to re-oder items in extension list
### Changed
- Made description field required and changed name to label

## [0.32.2] - 2018-12-06
### Fixed
- Action buttons in sidepanel table were not being shown on horizontal overflow.

## [0.32.1] - 2018-12-06
### Fixed
- Filters where not being applied properly and 'All' was the only way to show items.

## [0.32.0] - 2018-12-06
### Added
- CXV1-15959 - Added editable content in table cell.
- CXV1-16353 - Status column to Groups / Skills / Users Pages.

## [0.31.5] - 2018-12-06
### Fixed
- Loading spinner no longer shows on table when filter data returns empty array
- Hide add entity button when fetching data

## [0.31.4] - 2018-12-01
### Fixed
- Entity Table and side panel table show loading when fetching data and 'No results found' when there is no data

## [0.31.3] - 2018-12-01
### Added
- Option to add default filter entity table
### Changed
- FilterSelect component to properly format text

## [0.31.2] - 2018-11-30
### Added
- CXV1-16066 - Added default filter for combobox to modal and sidepanel tables.

## [0.31.1] - 2018-11-30
### Changed
- Hide tables action buttons if item is default on or inherited
- Remove null form cells when no value is provided

## [0.31.0] - 2018-11-28
### Added
- CXV1-16066 - Added combobox type for filtering modal and sidepanel table.

## [0.30.0] - 2018-11-28
### Added
- CXV1-15509 - Component to add/update/remove list of user extensions

## [0.29.10] - 2018-11-27
### Fixed
- CXV1-16224 - Suggestions dropdown was not scrolling on arrows keydown press.
- Suggestions dropdown was allowing resize columns header behind it.

## [0.29.9] - 2018-11-16
### Fixed
- Modal background was allowing resize columns header behind it.

## [0.29.8] - 2018-11-15
### Fixed
- Select field can now accept null as a value option (required by users from for noPassword and defaultIdentityProvider)

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
