# AstroPic

A web application that can assist you in selecting the most appropriate synonyms and antonyms for phrases. The app uses the DataMuse API for fetching the most suitable words to enhance your vocalbulary.

## Tech Stack

**Languages:** HTML, CSS, Javascript

## Features

- no default api call for fetching data
- fetching data using click search and search via enter button on keyboard
- consist of advance css background animation.
- mobile responsive

## Base Sections

1. HEADER- basic heading and a introduction sentace.
2. MAIN- consists of all the data
3. SEARCH-BOX- Heading | Search Form | Search Button
4. SPINNER
5. API-DATA - Synonyms | Antonyms
6. FOOTER- consists of footer .

## Color Reference

| Color      | Hex                                                              |
| ---------- | ---------------------------------------------------------------- |
| bg         | ![#1d1e20](https://via.placeholder.com/10/1d1e20?text=+) #1d1e20 |
| white      | ![#fff](https://via.placeholder.com/10/fff?text=+) #fff          |
| black      | ![#000](https://via.placeholder.com/10/000?text=+) #000          |
| dark       | ![#575757](https://via.placeholder.com/10/575757?text=+) #575757 |
| red        | ![#dc3545](https://via.placeholder.com/10/dc3545?text=+) #dc3545 |
| dark-red   | ![#ff4141](https://via.placeholder.com/10/ff4141?text=+) #ff4141 |
| gray       | ![#70808e](https://via.placeholder.com/10/70808e?text=+) #70808e |
| light-gray | ![#ddd](https://via.placeholder.com/10/ddd?text=+) #ddd          |
| light      | ![#eeefef](https://via.placeholder.com/10/eeefef?text=+) #eeefef |

## APOD API Reference.

#### Get item

```http
  GET https://api.datamuse.com/
```

```http
  API_KEY not-required
```

| Parameter  | Syntax                      | Description                                                       |
| :--------- | :-------------------------- | :---------------------------------------------------------------- |
| `synonyms` | `rel_syn=words?${variable}` | The rel_syn=words? must be used to fetch the synonyms of variable |
| `antonyms` | `rel_ant=words?${variable}` | The ant_syn=words? must be used to fetch the antonyms of variable |

## Developer - Kritagya Singh Chouhan

- [@kritagya20](https://www.github.com/kritagya20) : GitHub
- [@kritagya_chouhan](https://www.instagram.com/kritagya_chouhan/) : Instagram
- [@kritagyachouhan](https://twitter.com/kritagyachouhan/) : Twitter
- [@] : Linkedin

## Contributing

Contributions are always welcome!
