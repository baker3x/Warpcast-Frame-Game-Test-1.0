/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        What time is it? 
      </div>
    ),
    intents: [
      <Button 
        action="/1"
        value="1">
        Check phone
      </Button>,
    ],
  })
})
app.frame('/1', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        3 am? ugh.. 
      </div>
    ),
    intents: [
      <Button 
        action="/2"
        value="2">
        Go back to bed
      </Button>,
    ],
  })
})
app.frame('/2', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        BOOM ! 
        Loud noise comes from downstairs
      </div>
    ),
    intents: [
      <Button 
        action="/3"
        value="3">
        What was that?
      </Button>,
    ],
  })
})
app.frame('/3', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        The sound of the bathroom door opening slowly...
      </div>
    ),
    intents: [
      <Button 
        action="/4"
        value="4">
        Hide in closet
      </Button>,
      <Button 
        action="/5"
        value="5">
        Go look in hallway
      </Button>,
    ],
  })
})
app.frame('/4', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        FUCK FUCK FUCK PLS DONT LOOK IN HERE.
      </div>
    ),
    intents: [
      <Button 
        action="/6"
        value="6">
        Stay hidden
      </Button>,
      <Button 
        action="/7"
        value="7">
        Peak out to see
      </Button>,
    ],
  })
})
app.frame('/5', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        Theres nothing here...
      </div>
    ),
    intents: [
      <Button 
        action="/10"
        value="10">
        Go back and hide
      </Button>,
      <Button 
        action="/11"
        value="11">
        Check downstairs
      </Button>,
    ],
  })
})
app.frame('/6', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        Something enters the room...
      </div>
    ),
    intents: [
      <Button 
        action="/8"
        value="8">
        Heart begins to race...
      </Button>,
    ],
  })
})
app.frame('/7', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        The bedroom door slowly opens....
      </div>
    ),
    intents: [
      <Button 
        action="/9"
        value="9">
        what the fuck is that?
      </Button>,
    ],
  })
})
app.frame('/8', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        Shadowy figure huffs and heads back into hallway
      </div>
    ),
    intents: [
      <Button 
        action="/14"
        value="14">
        Stay quite
      </Button>,
    ],
  })
})
app.frame('/9', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        A Shadowy figure grows to the cieling
      </div>
    ),
    intents: [
      <Button 
        action="/14"
        value="14">
        Hide in closet again
      </Button>,
      <Button 
        action="/15"
        value="15">
        Try to run toward the door
      </Button>,
    ],
  })
})
app.frame('/10', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        FUCKING DOOR WONT LOCK!
      </div>
    ),
    intents: [
      <Button 
        action="/12"
        value="12">
        Hide in closet
      </Button>,
    ],
  })
})
app.frame('/11', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        Loud foot steps and a shadow pace you down the stairs...
      </div>
    ),
    intents: [
      <Button 
        action="/13"
        value="13">
        Head to the kitchen
      </Button>,
    ],
  })
})
app.frame('/12', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        A shadowy figure enters the room... 
      </div>
    ),
    intents: [
      <Button 
        action="/14"
        value="14">
        Stay hidden
      </Button>,
      <Button 
        action="/15"
        value="15">
        Fight
      </Button>,
    ],
  })
})
app.frame('/13', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        Where the fuck is the knives!!! 
      </div>
    ),
    intents: [
      <Button 
        action="/15"
        value="15">
        Holding the toaster you swing at the shadowy figure
      </Button>,
    ],
  })
})
app.frame('/14', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        YOU LIVED
      </div>
    ),
    intents: [
      <Button 
        action="/"
        value="0">
        START OVER
      </Button>,
    ],
  })
})
app.frame('/15', (c) => {
  const { buttonValue, inputText, status } = c
  const desision = inputText || buttonValue
  return c.res({
    image: (
      <div style={{
        color: "white",
        fontSize: "60",
        fontStyle: "normal",
        letterSpacing: "-0.025em",
        lineHeight: "1.4",
        marginTop: 30,
        padding: "0 120px",
        whiteSpace: "pre-wrap",
      }}
      >
        YOU DIED
      </div>
    ),
    intents: [
      <Button 
        action="/"
        value="0">
        START OVER
      </Button>,
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
