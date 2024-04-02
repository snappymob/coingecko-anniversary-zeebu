# CoinGecko Anniversary Zeebu Subpage

Landing page for CoinGecko anniversary and halving campaign - Zeebu client.

## Usage

### Development

Run development build + watch

```
npm run dev
```

Then use the Live Server extension in Visual Studio Code to launch a preview page. Ensure that the preview is on the `dist` folder.

### Building

Build for deployment. This isn't necessary if you have already been running in development as it is just the same.

```
npm run build
```

### Deployment

1. Copy the contents the `body` tag of `index.html` excluding the `body` tag and paste it in a HTML element in WordPress.
2. [Generate a jsdelivr link](https://www.jsdelivr.com/github) to the `dist/main.js` file and then include it as a script in the HTML element of a WordPress page you created previously.