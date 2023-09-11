import { get } from "stack-trace";
import winston from "winston";

const getModule = () => {
  const boilerplateLines = (line) =>
    line &&
    line?.getFileName() &&
    line.getFileName().includes("src") &&
    !line.getFileName().includes("/node_modules/") &&
    !line.getFileName().includes("node:");

  try {
    const callSites = get().filter(boilerplateLines);

    if (callSites.length === 0) return "Não encontrado";
    const results = new Set();
    for (const callSite of callSites) {
      results.add(callSite.getFileName());
    }
    if (results.size > 1)
      return Array.from(results)[1].replace(/^.*src\//, "src/");
    return results
      .values()
      .next()
      .value.replace(/^.*src\//, "src/");
  } catch (e) {
    return "Não encontrado";
  }
};

const formatLog = () => {
  return winston.format.combine(
    winston.format.align(),
    winston.format.colorize({ all: true }),
    winston.format.printf(
      (info) =>
        `${[info.timestamp]} - ${info.level}: [${getModule()}] ${info.message}`
    )
  );
};

const logConfiguration = {
  transports: [],
  format: formatLog(),
  handleExceptions: true,
  handleRejections: true,
};
logConfiguration.transports.push(
  new winston.transports.Console({ silent: true })
);
const logger = winston.createLogger(logConfiguration);

export default logger;
