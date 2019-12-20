# hubspot-form-react
Render custom Hubspot forms with React

## Installation
`npm install hubspot-form-react --save`

## How to Use
```
import HubspotFormReact from 'hubspot-form-react`
...
<HubspotFormReact 
  portalId="hubspot_portal_id"  required
  formId="hubspot_form_id"  required
  fields={[   // optional for any other custom fields
    {
      name: "name",   // should match name in your Hubspot form
      value: "value",   // default value you want to set
      type: "type"  // input type for hidden field in form
    }
  ]}
  formClass="class"   optional for styling form
  inputClass="class"  optional for styling email input field
  submitButtonClass="class"   optional for styling submit button
  submitButtonId="id"   optional for targeting submit button by ID
  submitButtonValue="value"   optional for adding specific text to submit button
  onSubmit={submitFunction} // optional for adding any submit events
  divClass="class" // optional styling for custom fields
/>
```
