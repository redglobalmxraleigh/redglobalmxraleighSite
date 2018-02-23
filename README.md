# redglobalmxraleighSite
This site was create for the Red Global Mx - Raleigh Chapter
http://www.redglobalmxraleigh.com/#/home

It was based on a template call Velocity https://wrapbootstrap.com/theme/velocity-for-products-bootstrap-4-WB0N38R04, it is a paid template

It uses Angular to build the html pages, and there is no backend support, only static files.

The code was upload it to run the site in a local machine using node.js

In a nutshell, to make changes on the application, you have to take the following steps:

* [Download and run in a local environment](##download-and-run)
* [Develop on a local environment](#develop)
  * [Initialization](#initialization)


  ## Download and run in a local environment


  You need to have `git` installed on your machine. If you do not have it, you have to install git in your machine. Go to https://git-scm.com/downloads and select the operating system that you have on your local machine. Download it and follow the instruction to install it.

  Then you need to create an account on github.com, and the `administrator` will have to give you access to the repo `https://github.com/redglobalmxraleigh/redglobalmxraleighSite`

  Then you need to clone the application from github with the following command:

      $ git clone https://github.com/redglobalmxraleigh/redglobalmxraleighSite.git

  Notice that the command will create a folder named `redglobalmxraleighSite` using the as the root the folder where you executed the `clone`

  ### Develop on a local environment

  Now you have to create a branch it's time to begin doing real work with Cloudant and Node.js.

      $ git branch "new branch name"

  Install node.js on your machine

  Run the command `node app.js`, and go to a browser and enter the url: `http://localhost:3000` to test your changes

  Once you are satisfied, execute the following `git` commands

  `git st` --> to check what changes you have done
  `git add .` --> to add all your changes to the staging area
  `git commit -m "Add a comment which describes the changes you just did"`
  `git push` --> This will push your branch to the github.com server

  At this point, you should be able to go the the https://github.com/redglobalmxraleigh/redglobalmxraleighSite.git and see the commits done

  You need to submit a `PR` pull request, this will trigger a notification to the `administrator` to indicate that a new change is in the server, ready to be merged with the develop branch
  1) Ideally a test automation and/or code review can be optionally done by the other developers
  2) Once test automation/code review is done,the `administrator` will check the change and `merge the changes` to the `develop branch`,
  3) The administrator will push the code to the test server `http://redglobalmxraleigh.com/test/#/home`

  Once the members reviewed all the changes, a move to production will happen as following:
   1) The administrator will run a `PR` from `develop` to `master`
   2) Ideally a test automation and/or code review can be optionally done by the other developers
   3) The `develop` branch will be `merged` to the `master` branch