# Frontend (MONO) for UKIS Map Applications

This is an mono repository that hosts all stuff from the UKIS Frontend like our Clarity-Layout and all the components, services, pipes...
It uses [angular](https://angular.io/) and the [Clarity Design System](https://vmware.github.io/clarity/).
The dependencies to the needed modules are defined in package.json and are stored in node_modules.  

This repository contains a few core components:
- global-alert
- global-footer
- global-progress-
- header

and a few routing views:
- route-home
- route-legal-notice
- route-privacy
- route-vertical-nav

and a the following modules as angular libraries:
- datatypes
     - layers
     - map-state
     - owc-json
     - user-info
- services
     - layers
     - map-state
     - owc-json
     - util-store
- base-layers
     - raster
- map-ol
- layer-control
- map-navigator
- observation-explorer
- dataset-explorer
- user-info
- cookie-alert




## Issues
 http://jira.ukis.eoc.dlr.de/issues/?jql=project%20%3D%20UKISDEV%20AND%20Component%20%3D%20Frontend%20AND%20Labels%20%3D%20master

## Getting started to develop
- Check if [Git](https://git-scm.com/) is installed.
- Clone the repo: `git clone http://git.ukis.eoc.dlr.de/scm/mofro/frontend.git` . 
- Create your own branch for your project based on master: 
```bash
     # go to cloned repo
     cd frontend
     # create local branch based on master
     git checkout -b project-XXX
     #push local branch to remote
     git push -u origin project-XXX
```
- Check if [Node.js](https://nodejs.org/) and npm is installed.
- Install dependencies: `npm install`
- Start development server: `npm start`
- Check `localhost:4200/index.html`
- [see development documentation](DEVELOPMENT.md)



## Note
- all versions in package.json should be fixed! 
- reserve time in sprint or before a sprint to upgrade versions and then to test and fix broken dependencies. (similar to hardware upgrades)

## Usage of compodoc to generate documentation
[compodoc](https://github.com/compodoc/compodoc) is used to collect and render documentation from code for angular projects. 

### How compodoc works 

* definition of included source code in tsconfig.doc.json
* By default compodoc does not scan node_modules for source code to include into documentation. This behaviour cannot be changed without adapting compodocs code. As we import UKIS modules as dependencies via package.json, we use the project [git-dependencies](http://git.ukis.eoc.dlr.de/scm/admin/npm-git-dependencies.git) to download and store the UKIS sources to the folder doc_modules. This folder doc_modules is added to tsconfig.doc.json in 1 so that compodoc is able to screen it
* A call to `npm run compodoc` will generate the documentation which is stored in folder documentation inside the project. This can be pushed to git, so taht it can be browsed from there. 

### Writing documentation for compodoc

Compodoc use Typescript AST parser and it's internal APIs, so the comments have to be JSDoc comments. 


## Continuous Integration: Jenkins TODO

The [jenkins pipeline ukis-mofro_master](http://torres.eoc.dlr.de/job/ukis-mofro_master/) is defined for the branch master to automatically build it. Then, it is automatically deployed to [duarte](//duarte.eoc.dlr.de/master/) 

For all project branches such a pipeline can be created to ensure that breaking changes are discovered early.
