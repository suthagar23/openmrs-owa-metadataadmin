<img src="https://cloud.githubusercontent.com/assets/668093/12567089/0ac42774-c372-11e5-97eb-00baf0fccc37.jpg" alt="OpenMRS"/>

# Metadata Management OWA  - GSoC 2017 Project

This repository contains the Open Web App developed for Metadata Management modules [MetaData Management in Admin UI Project](https://wiki.openmrs.org/display/projects/More+Metadata+Management+in+AdminUI).

> System Administration modules functionality implemented as an OWA for OpenMRS

For further documentation about OpenMRS Open Web Apps see [the wiki page](https://wiki.openmrs.org/display/docs/Open+Web+Apps+Module).


### Production Build

You will need NodeJS 4+ installed to do this. See the install instructions [here](https://nodejs.org/en/download/package-manager/).

Once you have NodeJS installed, you need to install Gulp and Bower (first time only) as follows:
````
npm install -g gulp bower
````

Install the dependencies (first time only):

```
npm install && bower install
```

Build the distributable using [Gulp](http://gulpjs.com/) as follows:

````
gulp
````

This will create a file called `metadataAdmin.zip` file in the `dist` directory, which can be uploaded to the OpenMRS Open Web Apps module.

## License

[MPL 2.0 w/ HD](http://openmrs.org/license/) © [OpenMRS Inc.](http://www.openmrs.org/)
