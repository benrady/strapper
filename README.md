
# About Strapper 

Strapper is a basic skeleton for building single page HTML5 apps, using [Twitter Bootstrap](http://twitter.github.io/bootstrap). Unlike a "web framework" Strapper makes no assumptions about your data model. It simply provides:

* A view/controller mechanism, based on url hash change events.
* A simple DOM event wrapper
* A curated set of JavaScript libraries (as script tags commented out in index.html)

# Live Example

It's not much to look at, but [here's a live example](http://home.benrady.com)

# Develop

0. Clone the repo (if you haven't already)
0. Run `./bin/server`
0. Edit or add things in `./public` as needed
0. Browse to [http://localhost:8000](http://localhost:8000) to see your changes
0. GOTO #3


# Deploy
The default deploy script for Strapper uses [Amazon S3](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html). S3 is an inexpensive and scalable option for hosting static apps that use 3rd party (a.k.a. cloud) services for all server-side behavior.

0. Create a file named `.deploy_config` in strapper's root directory
0. Set the `s3_bucket` variable to be your Amazon S3 bucket name 
  
        s3_bucket=mybucket.example.com
0. Install [s3cmd](http://s3tools.org/s3cmd)
0. Run `/bin/deploy`
