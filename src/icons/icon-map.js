import * as React from "react"

const IconMap = () => {
  return (
    <svg
      version="1.1"
      id="icon-map"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 335.6 214.4"
      role="img"
    >
      <style>
        {`
          .icon-map--rings{
            animation: 5s ease-in infinite ringsAnimation;
            opacity: 0;
          }
          @keyframes ringsAnimation {
            30%, 86% { opacity: 0; }
            50%, 70% { opacity: 1; }
          }
       `}
      </style>
      <path
        d="M26.6 5.9.7 59c-1.1 2.2-.9 4.8.5 6.8l6.7 10c1.9 2.8 1.4 6.6-1.1 8.9-2.6 2.3-3 6.1-1.1 8.9l16.5 24.3c.8 1.2 1.2 2.6 1.2 4l-.1 3.1c-.1 3.5 2.5 6.6 6 7l6.7.7c1.2.1 2.4.6 3.4 1.4l14.5 11.1c.5.4 1.2.8 1.8 1 4.1 1.5 20 7.2 21.1 7.2.9 0 10.3-2 16.5-3.4 3.2-.7 6.5 1 7.7 4.1l5.3 13.1c.7 1.7 2.1 3.1 3.8 3.8l6.5 2.6 5.6-5.6 9.5 4.2c1.9.9 3.4 2.6 3.9 4.7l3.8 16.4c.6 2.8 3 4.9 5.9 5.2l9.7 1.1v-5.8c0-2.3 1.2-4.5 3.2-5.8l7.5-4.7c1.6-1 2.7-2.5 3-4.4.6-2.7 1.5-6.5 2.1-6.5.7 0 9.8-.9 14.3-1.4 1.6-.2 3.3.3 4.6 1.2l4 2.8c1.2.9 2.7 1.3 4.2 1.2l6.6-.2 2.6-7.6 22.6-.9c1.8-.1 3.5.6 4.9 1.8l13.1 12c.7.6 1.2 1.4 1.6 2.2l8.3 18.1c.4.9 1 1.7 1.7 2.3l8.1 7.1c1.9 1.7 4.6 2.1 7 1.2l1-.4c3.5-1.4 5.2-5.3 3.8-8.8v-.1L262 160.4c-1-2.3-.5-5 1.1-6.9l31.8-38.3c1.6-1.9 2-4.5 1.1-6.8l-5-12.7c-.8-2-.6-4.2.5-6L305 67.2v-4.6l15.9-19c1.6-1.9 2-4.6 1.1-6.9l-6.8-17.1c-.8-2-2.5-3.5-4.6-4.1l-.4-.1c-3.6-1-7.4 1.2-8.3 4.9-.2.6-.2 1.3-.2 2l.2 5.2c.1 2.4-1.1 4.6-3.1 5.9l-14.2 9.3c-.5.3-.9.7-1.3 1.1L272.1 56c-.7.8-1.7 1.4-2.7 1.8l-4 1.5c-2.6 1-4.4 3.4-4.5 6.2l-.1 4.5c-.1 3.3-2.5 6.1-5.8 6.6l-5 .7c-3.7.5-7.2-2-7.7-5.7 0-.2-.1-.5-.1-.7l-.3-8.1c0-1-.3-2-.8-2.9l-2.8-5.4c-1.7-3.3-5.9-4.6-9.2-2.9l-.9.6-5 3.7c-2 1.5-3 3.9-2.7 6.3l2.2 17.5s-9.6 1.3-9.9 0c-.2-1-1.2-15.7-1.7-23.8-.2-3.1 1.7-5.9 4.6-6.9 6.8-2.2 16.5-11.4 15.1-12.5-1.9-1.4-4-2.7-6.1-3.8-1.4-.8-3-1-4.5-.7l-15.8 2.9-11.4 7.7-14.2-6.1-19.6-8.2c-.1-.1-.2-.1-.4-.1-1.5-.5-12.1-4.2-13.3-4.2-1 0-9.5 2.1-14.2 3.2-1.9.5-3.9.1-5.6-1.1l-9.7-6.9c-.2-.1-.3-.3-.5-.4L105.4 10c-1.2-1-2.6-1.6-4.2-1.7C91.5 8 55 6.7 52.1 6.4c-2.2-.2-11.6-2.6-17.7-4.2-3.2-.8-6.4.7-7.8 3.7z"
        fill="#afc8ff"
      />
      <path
        fill="#fff"
        d="M285.2 207.4c-.8 0-1.6-.3-2.2-.8l-8.2-7.1c-.4-.3-.6-.7-.8-1.1l-8.3-18.1c-.6-1.3-1.4-2.4-2.4-3.3l-13.2-12c-1.9-1.7-4.4-2.7-6.9-2.7l-23 .9c-1.4.1-2.7 1-3.2 2.3l-1.9 5.3-4.2.2c-.7 0-1.4-.2-2-.6l-4-2.8c-1.7-1.2-3.8-1.9-5.9-1.9-.3 0-.7 0-1 .1-7.8.8-13.3 1.3-14 1.4-3.5 0-4.4 4.1-5.4 9.2-.2.9-.7 1.6-1.5 2.1l-7.5 4.7c-3 1.9-4.8 5.2-4.8 8.7v1.9l-5.9-.7c-1.4-.2-2.5-1.2-2.9-2.6l-3.8-16.4c-.7-3.1-2.9-5.8-5.8-7.1l-9.5-4.2c-1.3-.6-2.9-.3-3.9.7l-4 4-4.4-1.7c-.8-.3-1.5-1-1.9-1.9l-5.3-13.1c-1.9-4.6-6.8-7.3-11.7-6.2-11.4 2.5-14.7 3.1-15.7 3.3-1.8-.5-8.4-2.7-20.1-7-.3-.1-.6-.3-.9-.5l-14.5-11.1c-1.5-1.1-3.3-1.8-5.1-2.1l-6.7-.7c-1.7-.2-3-1.7-3-3.4l.1-3.1c.1-2.2-.6-4.3-1.8-6.1L21.6 89.6c-.9-1.4-.7-3.2.5-4.4 3.8-3.4 4.6-9.2 1.7-13.4l-6.7-10c-.7-1-.7-2.2-.2-3.3L42.8 5.4c.5-1.1 1.7-1.9 3-1.9.3 0 .6 0 .8.1C56.8 6.2 63 7.7 64.9 7.9c3 .3 38.5 1.5 49.4 1.9.7 0 1.5.3 2 .8l10.2 8.8c.2.2.5.4.8.6l9.7 6.9c2.4 1.7 5.5 2.3 8.4 1.6 8-2 12.1-2.9 13.3-3.1 1.5.3 6.4 2 12.3 4l19.8 8.2 14.2 6.1c.4.2.9.3 1.4.3.7 0 1.4-.2 1.9-.6l10.8-7.3 15.1-2.7c.2 0 .4-.1.6-.1.6 0 1.1.1 1.6.4 1.4.8 2.5 1.4 3.3 1.9-2.5 2.6-7.7 6.8-11.6 8.1-4.4 1.5-7.3 5.7-7 10.4 1.4 23 1.6 23.9 1.8 24.4.8 3.2 4.5 3.2 6.1 3.2 2.6-.1 5.1-.3 7.7-.6 1.9-.3 3.2-2 3-3.9l-2.2-17.5c-.1-1.2.4-2.4 1.3-3.1l5-3.7c1.5-1.1 3.6-.8 4.7.7.1.1.2.3.3.5l2.8 5.4c.2.4.4.9.4 1.4l.3 8.1c.2 5.7 5 10.1 10.7 9.9.4 0 .7 0 1.1-.1l5-.7c5-.7 8.7-4.9 8.8-10l.1-4.5c0-1.4.9-2.6 2.2-3.1l4-1.5c1.6-.6 3-1.5 4.1-2.7L298.9 44c.2-.2.4-.4.6-.5l14.2-9.3c3-2 4.8-5.4 4.6-9l-.2-5.2c0-.9.3-1.8.9-2.4.8-.9 2.1-1.2 3.2-.9l.4.1c1 .3 1.8 1 2.2 2l6.8 17.1c.4 1.1.2 2.4-.5 3.4-.1.1-.1.2-.2.3L315 63.2l-13.6 22.7c-1.6 2.7-1.9 6.1-.8 9l4.9 12.6c.4 1.1.2 2.4-.5 3.3l-31.8 38.3c-2.4 2.9-3 7-1.6 10.5l17.5 42.6c.7 1.7-.1 3.6-1.8 4.3l-1.1.4c-.2.4-.6.5-1 .5z"
      />
      <path
        d="M45.9 7c15.6 4 17.8 4.3 18.7 4.4 2.8.3 32.3 1.3 49.5 1.9l10.2 8.8c.3.3.7.6 1 .8l9.7 6.9c3.3 2.3 7.4 3.1 11.2 2.1 6.8-1.7 10.6-2.5 12.3-2.9 1.9.5 6.4 2 11.2 3.7l19.6 8.1 14.2 6.1c2.2.9 4.7.7 6.6-.6l10.2-6.9 12.1-2.2c-1.7 1.3-3.6 2.4-5.6 3.2-5.9 2-9.8 7.7-9.4 13.9 1.4 23.3 1.6 24.2 1.9 25 .7 2.7 2.9 5.9 9.5 5.9 2.7-.1 5.4-.3 8.1-.7 3.8-.5 6.4-4 6-7.7l-2.2-17.4 4.8-3.6 2.7 5.2.3 8.1c.3 7.4 6.3 13.3 13.7 13.2.7 0 1.3 0 2-.1l5-.7c6.7-1 11.6-6.6 11.8-13.3v-4.3l4-1.5c2.1-.8 4-2 5.5-3.7l11.1-12.3 14.2-9.3c4-2.7 6.4-7.2 6.2-12l-.2-5h.1l6.8 17c-.2.2-.3.4-.4.6l-15.9 23.6c-.1.1-.1.2-.2.3l-13.5 22.6c-2.2 3.6-2.6 8.1-1 12.1l5 12.5-31.9 38.2c-3.2 3.9-4.1 9.3-2.1 14l17.4 42.5-.8.4-8.1-7.1-8.2-18.1c-.8-1.7-1.9-3.2-3.2-4.5l-13.2-12c-2.5-2.3-5.8-3.6-9.3-3.6h-.5l-22.6.9c-2.9.1-5.4 2-6.3 4.7l-1.1 3.1-1.8.1-4-2.8c-2.7-1.9-6-2.8-9.3-2.5-9 .9-13 1.3-13.8 1.4-6.2.1-7.6 6.7-8.7 11.9l-7.5 4.7c-3.4 2.1-5.8 5.7-6.3 9.7l-2-.2-3.8-16.3c-1-4.2-3.9-7.7-7.8-9.5l-9.5-4.2c-2.6-1.2-5.7-.6-7.8 1.4l-2.4 2.4-2.2-.8-5.3-13.1c-2.5-6.2-9.1-9.7-15.7-8.3-9.4 2-13.2 2.8-14.7 3.1-2.4-.7-8.8-3-19.1-6.7l-14.5-11.1c-2-1.5-4.4-2.5-6.8-2.7l-6.6-.7.1-2.9c.1-2.9-.7-5.7-2.4-8.1L24.6 87.8c5-4.6 6-12.2 2.2-17.9L20 60.1 45.9 7M45.8 0c-2.6 0-5 1.5-6.1 3.8L13.8 57c-1.1 2.2-.9 4.8.5 6.8l6.7 10c1.9 2.8 1.4 6.6-1.1 8.9-2.6 2.3-3 6.1-1.1 8.9l16.5 24.3c.8 1.2 1.2 2.6 1.2 4l-.1 3.1c-.1 3.5 2.5 6.6 6 7l6.7.7c1.2.1 2.4.6 3.4 1.4l14.5 11c.5.4 1.2.8 1.8 1 4.1 1.5 20 7.2 21.1 7.2.9 0 10.3-2 16.5-3.4.5-.1 1-.2 1.5-.2 2.8 0 5.3 1.7 6.3 4.2l5.3 13.1c.7 1.7 2.1 3.1 3.8 3.8l6.5 2.6 5.6-5.6 9.5 4.2c1.9.9 3.4 2.6 3.9 4.7l3.8 16.4c.6 2.8 3 4.9 5.9 5.2l9.7 1.1v-5.8c0-2.3 1.2-4.5 3.2-5.8l7.5-4.7c1.6-1 2.7-2.5 3-4.4.6-2.7 1.5-6.5 2.1-6.5.7 0 9.8-.9 14.3-1.4h.7c1.4 0 2.8.4 3.9 1.3l4 2.8c1.1.8 2.5 1.3 3.9 1.3h.3l6.6-.2 2.6-7.6 22.6-.9h.3c1.7 0 3.3.6 4.6 1.8l13.2 12c.7.6 1.2 1.4 1.6 2.2l8.3 18.1c.4.9 1 1.7 1.7 2.3l8.1 7.1c1.9 1.7 4.6 2.1 7 1.2l1-.4c3.5-1.4 5.2-5.3 3.8-8.8v-.1L275 158.3c-1-2.3-.5-5 1.1-6.9l31.8-38.3c1.6-1.9 2-4.5 1.1-6.8l-4.9-12.6c-.8-2-.6-4.2.5-6l13.5-22.6L334 41.5c1.6-1.9 2-4.6 1.1-6.9l-6.8-17.1c-.8-2-2.5-3.5-4.6-4.1l-.4-.1c-.6-.1-1.2-.2-1.8-.2-3.8 0-6.8 3.1-6.8 6.8v.2l.2 5.2c.1 2.4-1.1 4.6-3.1 5.9l-14.2 9.3c-.5.3-.9.7-1.3 1.1L285.2 54c-.7.8-1.7 1.4-2.7 1.8l-4 1.5c-2.6 1-4.4 3.4-4.5 6.2V68c-.1 3.3-2.5 6.1-5.8 6.6l-5 .7c-3.7.5-7.2-2-7.7-5.7 0-.2-.1-.5-.1-.7l-.3-8.1c0-1-.3-2-.8-2.9l-2.8-5.4c-1.7-3.3-5.8-4.6-9.2-2.9l-.9.6-5 3.7c-2 1.5-3 3.9-2.7 6.3l2.2 17.5c-2.4.3-4.8.5-7.2.6-1.5 0-2.6-.1-2.7-.6-.2-1-1.2-15.7-1.7-23.8-.2-3.1 1.7-5.9 4.6-6.9 6.8-2.2 16.5-11.4 15.1-12.5-1.9-1.4-4-2.7-6.1-3.8-1-.6-2.1-.8-3.3-.8-.4 0-.8 0-1.2.1l-15.8 2.9-11.4 7.7-14.2-6.1-19.6-8.2c-.1-.1-.2-.1-.4-.1-1.5-.5-12.1-4.2-13.3-4.2-1 0-9.5 2.1-14.2 3.2-1.9.5-3.9.1-5.6-1.1l-9.7-6.9c-.2-.1-.3-.3-.5-.4L118.5 8c-1.2-1-2.6-1.6-4.2-1.7-9.7-.3-46.2-1.6-49.1-1.9C63 4.2 53.6 1.8 47.5.2c-.6-.1-1.2-.2-1.7-.2z"
        fill="#323232"
      />
      <g id="Rings" fill="var(--feature-highlight, #ffb90a)">
        <path
          class="icon-map--rings"
          d="M228.2 214.4c-32.2 0-58.3-26.1-58.3-58.3s26.1-58.3 58.3-58.3 58.3 26.1 58.3 58.3c0 32.1-26.1 58.2-58.3 58.3zm0-109.8c-28.4 0-51.4 23-51.4 51.4s23 51.4 51.4 51.4 51.4-23 51.4-51.4c-.1-28.3-23.1-51.3-51.4-51.4z"
        />
        <path
          class="icon-map--rings"
          d="M228.2 197.2c-22.7 0-41.2-18.4-41.2-41.2s18.4-41.2 41.2-41.2c22.7 0 41.2 18.4 41.2 41.2-.1 22.8-18.5 41.2-41.2 41.2zm0-75.4c-18.9 0-34.2 15.3-34.2 34.2s15.3 34.2 34.2 34.2c18.9 0 34.2-15.3 34.2-34.2 0-18.9-15.3-34.2-34.2-34.2z"
        />
        <path
          class="icon-map--rings"
          d="M228.2 180.1c-13.3 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.7 23.9-24 24zm0-41.2c-9.4 0-17.1 7.6-17.1 17.1 0 9.4 7.6 17.1 17.1 17.1 9.4 0 17.1-7.6 17.1-17.1 0-9.4-7.7-17.1-17.1-17.1z"
        />
      </g>
      <path
        d="M228.4 108.7c9.5 0 17.2 7.7 17.2 17.2 0 16.3-17.2 30.5-17.2 30.5s-17.2-14.3-17.2-30.5c0-9.5 7.7-17.2 17.2-17.2z"
        fill="#4164ff"
      />
      <circle fill="#fff" cx="228.4" cy="125.9" r="9" />
    </svg>
  )
}

export default IconMap
