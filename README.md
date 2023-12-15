# Versa Pesquisa Front

Versa Pesquisa Front is the frontend of the Versa Pesquisa application, to deal with the submission and response of surveys, made with Next.js. This was  developed as part of the Sprint 7 from my internship.

----------

# Getting started

## Installation

Versa Pesquisa Front was made using Next.js with the App Router. In addition, to the visual was used Tailwind CSS.

Please check the official Next.js installation guide for server requirements before you start. [Official Documentation](https://nextjs.org/docs/getting-started/installation)

### Prerequisites

**Node version 16.8 or later**

### Cloning the repository

```shell
git clone git@github.com:RicardoCSM/versa-pesquisa-front.git
cd versa-pesquisa-front
```

### Environment setup

Create a copy of the .env.example file and name it .env. Fill in the necessary environment variables:

```shell
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/
NEXT_PUBLIC_FRONT_BASE_URL=http://localhost:3000
```

### Install packages

```shell
npm i
```

### Start the app

```shell
npm run dev
```

The application can be accessed at [http://localhost:3000](http://localhost:3000).

The survey panel, can be accessed at [http://localhost:3000/survey](http://localhost:3000/survey):

The survey view, can be accessed at [http://localhost:3000/view?survey_id=${survey_id}]

## Folders

- `app` - Contains the icon and the pages
- `app/components` - Contains all project components
- `app/hooks` - Contains hooks for using Modals
- `app/interfaces` - Contains project interfaces
- `app/providers` - Contains project providers
- `app/services` - Contains project services (including httpClient used in requests)
- `app/pages/api/auth` - Contains Next Auth config
