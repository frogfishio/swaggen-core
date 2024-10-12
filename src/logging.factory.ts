import { LoggingCapability } from "@frogfish/swaggen-types";
import { CoreLoggingCapability } from "./logging.capability";

export class CoreLoggingCapabilityFactory {
  constructor(private capabilities?: any) {}

  async create(): Promise<LoggingCapability> {
    return new CoreLoggingCapability();
  }
}
