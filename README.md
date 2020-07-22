# node-server-spa

NPM node based CLI package to provide a fast, complete and reliable way to publish, deploy or test SPA (such as Angular, React..) via Node + Express server.

# Install
Easy as pie, run: `npm install @manelcecs/node-server-spa`
ps: yes, a bit long... sorry

 # Usage
 Did i say this is fast and easy? No? O.K.
 This package is fast and easy to use. Just run on your root folder: `nsspa`
 TIP: NodeServerSinglePageApplication, just to keep it in mind.
## Step 1
The CLI will ask the name of your server file. Just press enter to let default `server.js` or type the name you want.
Try not to set directory or weird strings, it will crash or worse, it's going to append `.js` at the end.

## Step 2
Time to configure your server.

 1. PORT: the local port where the server will listen.
 2. Distribution folder: the compiled static folder where your application will be serverd.
 3. Access Point: this is the html file where all javascript static files are indexed, by default is `index.html` but if you've changed it, let the cli know.

# The End
That's all. Well, not all.
For now on, you should run `npm install express`. That's because I cannot modify `package.json` dependencies easily. BUT I'm going to do it. Keep an eye on it!

### Comming soon
The next steps, is test. Test it a lot.
But then:

 - Package.json dependency with express
 - Automated install
 - Package.json script modify to set the servers as main
 - ...

