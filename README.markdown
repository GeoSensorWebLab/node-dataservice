# node-dataservice

A Node Command Line Interface to the RPI Data Service.

## Setup

Install Node.js. From the command line, use `npm` to install the prerequisites for the `node-dataservice` tool.

    $ npm install

Next create a configuration file to hold details about the Data Service. Because the Data Service URL is private, it is not checked into version control. Create a file in the repo called `.data-service` with the following contents:

    {
      "url": "http://dataservice.example.com/v01"
    }

Then you can execute the tool:

    $ bin/data-service

## Commands

User Commands:

* `bin/dataservice list users`
* `bin/dataservice show user <userUID>`
* `bin/dataservice create user < new-user.json`
* `bin/dataservice update user < modified-user.json`
* `bin/dataservice destroy user <userUID>`

Sensor Commands:

* `bin/dataservice list sensors <userUID>`
* `bin/dataservice show sensor <userUID> <sensorUID>`
* `bin/dataservice create sensor <userUID> < new-sensor.json`
* `bin/dataservice update sensor <userUID> <sensorUID> < modified-sensor.json`
* `bin/dataservice destroy sensor <userUID> <sensorUID>`

Datastream Commands:

* `bin/dataservice list datastreams <userUID> <sensorUID>`
* `bin/dataservice show datastream <userUID> <sensorUID> <datastreamUID>`
* `bin/dataservice create datastream <userUID> <datastreamUID> < new-datastream.json`
* `bin/dataservice update datastream <userUID> <sensorUID> <datastreamUID> < modified-datastream.json`
* `bin/dataservice destroy datastream <userUID> <sensorUID> <datastreamUID>`

Datastream Record Commands:

* `bin/dataservice list records <datasteamUID>`
* `bin/dataservice show record <datastreamUID> <recordUID>`
* `bin/dataservice create record <datastreamUID> < new-record.json`
* `bin/dataservice update record <datastreamUID> <recordUID> < modified-record.json` (Broken)
* `bin/dataservice destroy record <datastreamUID> <recordUID>`

Note: Updating records is broken. Instead of updating an existing record, the Data Service will create a new record. If you delete the original record, the secondary record will be deleted as well.

Commands to delete models will ask for confirmation before sending the request to the Data Service.

When creating datastream records, a file with a single JSON object will create a single datastream record. A file with an array of JSON objects will create multiple datastream records, each with their own POST request.
