# AWS S3
A publisher to upload composed experiences to Atama's private AWS S3 bucket.

## Configuration
You need to configure the following fields when you want to use the AWS S3 publisher:

* Preview domain - The domain where your preview site is hosted.
    * Optional - only required if preview is supported by this channel.
    * The field is used together with the slug (see below) to generate the preview URL that the user can click on after a preview has been generated.
* Publish domain - The domain where your production site is hosted.
    * The field is used together with the slug (see below) to generate the published URL that the user can click on after an experience has been published.

## Required properties
When publishing an experience with this publisher, the following properties are required:

* Slug - The path segment in the URL that identifies a specific experience.
    * For example, `/docs/reference/publishers/aws` would be the slug for this page.
    * Here are some recommended rules to create a proper slug:
      * Starts with a slash /
      * Replace spaces with hyphens -, don’t use any other special characters
      * Use slashes to represent the hierarchy of your site, for example /resources/case-studies/abc
      * Should be lowercase
