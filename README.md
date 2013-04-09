
# About Strapper 

Strapper is a basic skeleton for building Single Page HTML5 apps, using
* [Twitter Bootstrap](http://twitter.github.io/bootstrap)
* [jQuery](http://jquery.com/)
* ...And [Amazon S3](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) for deployment

# Live Example

It's not much to look at, but [here's a live exaple](home.benrady.com)

# Develop

0. Clone the repo (if you haven't already)
0. Run `/bin/server`
0. Edit or add things in `/public` as needed
0. Browse to [http://localhost:8000](http://localhost:8000) to see your changes
0. GOTO #3


# Deploy
0. Create a file named `.deploy_config` in strapper's root directory
0. Set the `s3_bucket` variable to be your Amazon S3 bucket name 
  
        s3_bucket=mybucket.example.com
0. Install [s3cmd](http://s3tools.org/s3cmd)
0. Run `/bin/deploy`
