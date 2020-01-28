# folWebination
Flower Of Life Web Animation

## Install Libraries and Build Utilities
To git the dojo libraries and build utils, init and update the submodules

```git submodule init```

```git submodule update```


## Build release 

You will need Java installed to use the dojo build tools

If you have NPM then run

```npm run build```

Which runs the following commands:

  ```./src/lib/dojo/util/buildscripts/build.sh --profile ./folWebination.profile.js --language_in=ECMASCRIPT6``` 
  
  ```mkdir -p release/dojo```
  
 ```cp releaseBuild/folWebination/dojo/dojo.js release/dojo/dojo.js```


This will also create a releaseBuild directory with source maps that can be used for debugging
