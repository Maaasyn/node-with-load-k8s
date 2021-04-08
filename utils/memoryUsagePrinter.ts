import MB from "./toMb";

const memoryUsage = () => {
  const mem = process.memoryUsage();
  return MB(mem.rss) + "\t" + MB(mem.heapTotal) + "\t" + MB(mem.external);
};

export default memoryUsage;
