function solution(
  bridgeLength: number,
  weight: number,
  truckWeights: number[],
) {
  const queue: [number, number][] = []; // [weight, distance left]

  let timespent = 0;
  let currentWeight = 0;

  while (truckWeights.length || queue.length) {
    // decrease all queue element's distance left(q[1])
    queue.forEach((q) => q[1]--);
    timespent++;

    // dequeue if the head of the queue's second element is less than or equal to zero
    if (queue.length && queue[0][1] <= 0) {
      const passed = queue.shift() as [number, number];
      currentWeight -= passed[0];
    }

    // enqueue if currentWeight + truckWeights[0] <= weight
    if (truckWeights[0] + currentWeight <= weight) {
      const head = truckWeights.shift() as number;
      queue.push([head, bridgeLength]);
      currentWeight += head;
    }
  }

  return timespent;
}

export default solution;
