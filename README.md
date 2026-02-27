# quant-service

Quant scoring service for stock sentiment and forward expectation signals.

## Endpoint

- `GET /api/v1/quant/sentiments?symbols=AAPL,MSFT`

Response shape:

```json
{
  "timestamp": 1772177039282,
  "data": {
    "AAPL": [
      {
        "timestamp": 1772116200000,
        "confidence": 6.2,
        "reputation": "MEDIUM",
        "sentimentText": "Momentum and volatility are balanced, producing a neutral-to-positive setup.",
        "futurePredictions": {
          "days": [{ "5": { "expected": "+1.4%" } }],
          "months": [{ "1": { "expected": "+2.3%" } }],
          "years": [{ "1": { "expected": "+8.5%" } }]
        }
      }
    ]
  }
}
```

## Local run

```bash
npm install
npm run start:dev
```
