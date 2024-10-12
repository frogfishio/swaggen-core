import { Capabilities, CapabilityFactory } from "@frogfish/swaggen-types";
import { CoreLoggingCapabilityFactory } from "./logging.factory";

export class CoreCapabilityFactory implements CapabilityFactory {
  // Create core (default) capabilities
  public async create(
    caps: Array<string>
  ): Promise<Capabilities> {
    const capabilities: { [key: string]: any } = {};

    // Iterate through each capability in the array
    for (const cap of caps) {
      const capability = await this.createCapability(cap);
      if (capability) {
        capabilities[cap] = capability;
      }
    }

    // Return only the recognized capabilities
    return capabilities;
  }

  protected async createCapability(
    capability: string,
    capabilities?: any
  ): Promise<any> {
    switch (capability) {
      case "logging":
        const factory = new CoreLoggingCapabilityFactory();
        return (await factory.create()) || null;
      default:
        return null;
    }
  }
}
