export default function solution(priorities: number[], location: number) {
  const queue = priorities.map((priority, index) => [priority, index]);

  let isPrinted = false;
  let counter = 0;

  while (!isPrinted) {
    const head = queue.shift() as [number, number];
    const [priority] = head;

    if (queue.some((element) => element[0] > priority)) {
      queue.push(head);
    } else {
      counter++;
      if (head[1] === location) {
        isPrinted = true;
      }
    }
  }

  return counter;
}
