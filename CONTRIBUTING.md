# Opensource Haven ⭐
First of all, thanks for taking the time to contribute! 🎉👍
The following is a set of guidelines and conventions you must follow to get your contributions
accepted and accounted for. At the same time, these are mostly guidelines, not rules. Use your
best judgment, and feel free to propose changes to this document in a pull request.
**I don't want to read all of this, I just have a question!**
Please do not create an issue to ask a question, instead contact support in our
[support discord server](https://discord.haven.bio/). 
## Contributing
Before contributing in any manner, please read our
[code of conduct](https://github.com/teamcodebyte/haven-backend/blob/main/CODE_OF_CONDUCT.md) and
make sure you follow all the mentioned guidelines!
* [Reporting bugs](#reporting-bugs)
* [Requesting features](#requesting-features)
* [Contributing with code](#contributing-with-code)
### Reporting Bugs
There are two places you can report bugs at -
* [Support Discord Server](https://discord.haven.bio/)
* [Creating GitHub Issues](https://github.com/teamcodebyte/haven-backend/issues/new?assignees=&labels=bug&template=bug-report.md)
Follow the template and provide all essential information and we'll fix those pesky bugs you find!
Make sure you claim your Bug Hunter role if your bug is marked as relevant and added to our todo!
### Requesting Features
There are two places you can request and suggest features -
* [Support Discord Server](https://discord.haven.bio/)
* [Creating GitHub Issues](https://github.com/teamcodebyte/haven-backend/issues/new?assignees=&labels=suggestion&template=feature-request.md)
Follow the template and provide all essential information and we might implement the features you suggest!
Make sure you claim your Eureka role if your suggestion is implemented!
### Contributing with code
If you decide to contribute with code, here's what you must do -
* create an issue (preferably using one of the issue templates provided)
* fork the repository and clone it locally
* make your changes while adhering to our [code of conduct](https://github.com/teamcodebyte/haven-backend/blob/main/CODE_OF_CONDUCT.md)
and [styleguide](#conventions-and-styleguide) below
* create a new pull request [here](https://github.com/teamcodebyte/haven-backend/compare)
Our development team will go over your contributions and might -
* request for changes, or
* deny your PR
but we'll most likely merge your PR if you do everything you must!
## Conventions and Styleguide
### Code
* use the responses json file for API responses
* use asynchronous functions instead of promises or callbacks
* respond in API endpoints with the following format - ``return res.status().json({}).end();`` and leave lines in json!
### Style
* use ``"`` instead of ``'``, everywhere possible!
* use semicolons everywhere except after closing ``}``s like in ``if`` statements
* use ``} else {`` don't move to the next line
Implement all style changes in your PR if a team member requests them.
### Thanks for contributing and happy coding! 🎉
