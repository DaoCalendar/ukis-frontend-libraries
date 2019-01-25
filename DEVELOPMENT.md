# Ho to create a new Project based on the master branch

1. If you already cloned the project, create a new branch:
```bash
git checkout -b project-XXX
```

2. If you want to use some of the [UKIS-Modules](http://git.ukis.eoc.dlr.de/projects/MOFRO) include them in your package.json like described in the modules itself e.g [ol-map](http://git.ukis.eoc.dlr.de/projects/MOFRO/repos/map_ol4/browse).

3. Run ``npm install --registry http://hofer.eoc.dlr.de/nexus/content/groups/npm-all/ `` and check if everything is working with ``npm start``. If you get some errors from the compiler and you have included ukis-modules, try to run ``npm run gitDependencies`` (see [npm-git-dependencies](http://git.ukis.eoc.dlr.de/projects/ADMIN/repos/npm-git-dependencies/browse)) and ``npm start`` again.
Then check ``localhost:4200/index.html`` where the dev-server is normally listening.

## Folder Structure 
- to check out the folders see the [angular documentation](https://angular.io/guide/quickstart#the-src-folder)
- all of the ukis-modules are installed to ``node_modules/@ukis/`` and are includet to the typeScript compiler [see the tsconfig](http://git.ukis.eoc.dlr.de/projects/MOFRO/repos/frontend/browse/src/tsconfig.app.json) //this is normally not recommended but makes development of multiple modules faster.
- New components are placed in
    - src/app/components //all components (custom elements) which you insert in the HTML
    - src/app/route-components //all routes (pages) that you can access in the client via the URL
- The routes are configured via src/app/app-routing.module.ts


## Create new Components
- to create new things use [ng-cli](https://github.com/angular/angular-cli/wiki) e.g.

```bash
//new component(element)
ng generate component components/awesome-element
```
or
```bash
//new route (page)
ng generate component route-components/awesome-route
```

## Application structure and layout
to use clarity in full functionality, try to layout the application like clarity does:

**app-component**
```
<clr-main-container>
  <ukis-global-alert *ngIf="ui.alert" [(alert)]="ui.alert"></ukis-global-alert>
  <ukis-global-progress *ngIf="ui.progress" [(progress)]="ui.progress"></ukis-global-progress>

  <ukis-header [ukis-title]="title">
  </ukis-header>

  <router-outlet></router-outlet>

  <ukis-global-footer *ngIf="ui.footer">
    <router-outlet name="footer"></router-outlet>
  </ukis-global-footer>

</clr-main-container>
```

**route-components**
```
<main class="content-area">

</main>
<nav class="sidenav">

</nav>
```

and set the class 'content-container' to the route component itself
```
@Component({
  selector: 'ukis-route-vertical-nav',
  ...
  host: {
    "[class.content-container]": "true"
  }
})

```

So the header and it's navigation is global for the App and the sidenav can be customised in each route.

Furthermore try to us [semantic's](https://developer.mozilla.org/en-US/docs/Glossary/Semantics) and [ARIA
](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)



# Development of UKIS-Modules
[git Cheat Sheet](https://wiki.dlr.de/display/DFDGZS/Git+Cheat+Sheet)

when developing UKIS-Modules like [ol-map](http://git.ukis.eoc.dlr.de/projects/MOFRO/repos/map_ol4/browse) you should always use git tags to fix a certain state of the Module.
- show all tags: `git tag`
- create tag: e.g. `git tag -a v0.1.2 -m "version 0.1.2 bugfix"`
- push tag to remote: `git push origin v0.1.2`

every Module should have a branch named publish which is register on the Jenkins Pipeline to publish packages on Hofer

1. Clone the master Repository and install dependencies
```
git clone http://<username>@git.ukis.eoc.dlr.de/scm/mofro/frontend.git

cd frontend

npm install
```

2. Generate a library
```
ng g library <module-name> --prefix=ukis --skipInstall=true

//add main to the library package.json
"main": "src/public_api",

//develop the module in
- <module-name>.component.ts
- <module-name>.component.html
- <module-name>.component.scss
- <module-name>.service.ts
- <module-name>.module.ts
```

3. Set Postinstall Script for next install
```
//install dependencies of the module and run the build
"postinstall": "npm i --prefix projects/<module-name> projects/<module-name> & ng build <module-name>
```

4. Add the library module to the test project
```
//in  src/app/app.module.ts

import { <module-name> } from 'projects/<module-name>';

imports: [
    ...
    <module-name>
  ],
//
```

then you should can use components and services from the module.


5. Create a new repository and push the Module 

create a repository at http://git.ukis.eoc.dlr.de/projects/MOFRO/<module-name>
```
git remote set-url origin http://git.ukis.eoc.dlr.de/projects/MOFRO/<module-name>
git add .
git commit -m "<message>
```

## Publish the Module/library to hofer
1. Create a Project on Jenkins like [@ukis/cookie-alert](http://torres.eoc.dlr.de/view/Packaging/job/mofro-cookie-alert/)

```
//configure a shell task

# publish to internal npm registry
cd dist/@ukis/<module-name> && $CI_SCRIPTS/packaging/upload-npm-package.bash .
```

2. Create a new branch named `publish` and push it to the git 


