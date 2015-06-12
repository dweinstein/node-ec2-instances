# SYNOPSIS

List ec2 using [aws-sdk-js](https://github.com/aws/aws-sdk-js) instances, organized by tags.

Assumes you've [tagged](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html) your EC2 instances like:

```javascript
{ Tags:
   [ { Key: 'Purpose', Value: 'MyApp' },
     { Key: 'Environment', Value: 'production' },
     { Key: 'Name', Value: 'myapp-db-node1' } ],
}
```

# EXAMPLE
See [here](example.js)

# CONFIGURATION (ec2rc)

Will inspect `~/.ec2rc` for config info. [These](defaults.json) are defaults.

Uses [rc](https://github.com/dominictarr/rc) [standards](https://github.com/dominictarr/rc#standards).

## ec2_aws__sslEnabled
defaults to `true`

## ec2_aws__accessKeyId

## ec2_aws__secretAccessKey

## ec2_aws__region
defaults to `"us-west-2"`

