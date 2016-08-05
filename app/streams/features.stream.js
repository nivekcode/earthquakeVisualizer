let features$ = Rx.Observable.from([1])
  //.interval(5000)
  .flatMap(() => earthQuakeData$)
  .retry(3)
  .flatMap((dataset) => {
    return Rx.Observable.from(dataset.response.features);
  })
