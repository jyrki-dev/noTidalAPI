# Product Name
> Short blurb about what your product does.

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

Unofficial NodeJS API for TIDAL music streaming service. Based on the Python [python-tidal][pytidal] API by tamland.

![](header.png)

## Installation

Install the package either using either npm or yarn.

**npm:**

```sh
npm install my-crazy-module --save
```

**yarn:**

```sh
yarn add my-crazy-module --save
```

## Usage example

Using as a module:

```javascript
import { TidalAPI } from 'notidalapi';

const session = TidalAPI.session();
// Will run until you visit the printed url and link your account
await session.login_auth_simple()
const album = session.album(66236917);
const tracks = album.tracks();

tracks.forEarch((track) => {
  console.log(track);
});

```

Using with the CLI:

```sh
notidalapi album 66236918
```

_For more examples and usage, please refer to the [Wiki][wiki]._

## Development setup

Clone the repository, and install the depencies. All required scripts are found in the `package.json` file.

```sh
git clone
cd
yarn install
```

## Release History

* 0.0.1
  - Initial version

## Meta

Jyrki Kokkola – [@jyjokokk](https://twitter.com/jyjokokk/) – j.j.kokkola@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/jyrki-dev/noTidalAPI/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/jyrki-dev/noTidalAPI/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/jyrki-dev/noTidalAPI/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/jyrki-dev/noTidalAPI/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/jyrki-dev/noTidalAPI/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/jyrki-kokkola-1773ba178/
[wiki]: https://github.com/jyrki-dev/noTidalAPI/wiki
[pytidal]: https://github.com/tamland/python-tidal