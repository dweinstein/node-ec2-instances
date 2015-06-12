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
See [here](example.js) for code that outputs:

```javascript
{
  production:
   [ { ip: '10.10.173.1',
       name: 'myapp-prod-services01',
       environment: 'production' },
     { ip: '10.10.173.2',
       name: 'myapp-prod-thing',
       environment: 'production' },
     { ip: '10.10.173.3',
       name: 'myapp-prod-thing2',
       environment: 'production' } ]
  development:
   [ { ip: '10.10.171.1',
       name: 'myapp-dev-services01',
       environment: 'development' },
     { ip: '10.10.171.2',
       name: 'myapp-dev-hatchery',
       environment: 'development' },
     { ip: '10.10.171.3',
       name: 'myapp-dev-appnode01',
       environment: 'development' } ]
}
```

# CONFIGURATION (ec2rc)

Will inspect `~/.ec2rc` for config info. [These](defaults.json) are defaults.

Uses [rc](https://github.com/dominictarr/rc) [standards](https://github.com/dominictarr/rc#standards).

## ec2_aws__sslEnabled
defaults to `true`

## ec2_aws__accessKeyId

## ec2_aws__secretAccessKey

## ec2_aws__region
defaults to `"us-west-2"`

