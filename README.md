# Aristotle


# Overview

The easiest way to run / deploy aristotle is to using [nanobox](http://nanobox.io). Nanobox installs all the libraries and runtimes needed to run, and also can compile and deploy the app to production servers when the time comes.

### Running the app

11) Download Nanobox
2) Clone the repo `git clone git@github.com:Tolmark12/aristotle.git`
3) cd into the `aristotle` directory
4) ``` bash
# Add a convenient url to access the app
$ nanobox dns add local warcore.dev
# Fire up a virtual machine and install everything needed
$ nanobox run                          
# This will drop you into the virtual machine where you can run:
$ gulp```
5) visit http://warcore.dev:5654/lms.html?local=true&dev=true&sudo=true to view your live app
6) Changes you make to the code base are automatically compiled and shuttled into the VM and the webpage will be refreshed to show the changes.
