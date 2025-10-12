# Structure of Our Website

MainContainer
 - VideoBackground
 - VideoTitle
SecondaryContainer
 - MovieList * n
 - cards * n


- MovieList - Popular
  - MovieCard * n
- MovieList - Now Playing
- MovieList - Trending
- MovieList - Horror

# Netflix GPT

- Create vite@latest
- Configure TailwindCSS
- Header
- Routing of the App
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- FireBase Setup
- Deploying our app to production
- Create SignUp Use Account
- Implement Sign In with Api
- Created Redux Store with userSlice
- Implemented Sign Out feature
- Update Profile
- BugFix: Sign Up user dislayName and Profile picture update
- BufFix: if the user is not logged in Redirect /browse to login Page and Vice Versa
- Unsubscribe to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies from API
- Created Custom Hook for Now Playing Movies
- Created movieSlice
- Update Store with movie Data
- Planning for Main Container & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the browse page better with Tailwind Css
- usePopularMovies Custom hook and update state management and UI
- useTopRatedMovies Custom hook and update state management and UI
- useUpcomingMovies Custom hook and update state management and UI
- Refactor movie hooks and state management; 
- useHorrorMovies Custom hook and update state management and UI
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-Language Feature in Our App
- Get Groq Ai Api key 
- Groq search API call
- fetched gptMovieSuggestion from TMDB
- created gptSlice added data
- Reused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitnore
- Made our Site Responsive

# Features

- Login/Sign up Form
  - Sign In / Sign up Form
  - redirect to Browse Page
- Browse (after authetication)

  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestion
      - Movie List \* N

- Netflix GPT
  - Search Bar
  - Movie Suggestions
