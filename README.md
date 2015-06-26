Ad example that targets IOS, but is ussable in most androids/windows-phones and in the browser, as it has a timeout to simulate a shake after 4 seconds.

You can take a look at the demo in http://adtesting.co.nf

This is a quick and simple code sample delivered to a customer in a real business scenario. As it is a primary key objective the performance there is no js transpilation neither library to maintain the code size at minimum. This kind of ad is served by an adServer in native apps webviews

make sure you have installed node, npm and gulp

gulp tasks
==========

gulp (default)

Will launch the watch task that will spawn an express server in localhost:3000 and serve there the build version in ./bin from the source in ./src and watch for changes in the sources to act accordingly.

Explore the directory ./gulp/tasks for more specific tasks, the other main one is gulp deploy (for the real scenario) I have deleted the server credentials for obvious security reasons.


