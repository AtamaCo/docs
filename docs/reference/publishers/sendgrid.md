# SendGrid
A publisher that uses the Twilio SendGrid API to upload email templates to SendGrid.

## Configuration
You need to configure the following fields when you want to use the SendGrid publisher:

* SendGrid API Key - Please refer to the [SendGrid docs](https://docs.sendgrid.com/ui/account-and-settings/api-keys) for how to create an API key. Make sure it has at least enough permission to create and update email templates.
* Visualization endpoint - The visualization server transforms a composed email experience (JSON) into proper HTML that can be used in an email.

## Required properties
When publishing an experience with this publisher, the following properties are required:

* Name - Name of the email template that will be created in SendGrid
* Subject - Subject of the email in SendGrid
