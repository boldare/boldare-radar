/* tslint:disable */
/* eslint-disable */
/**
 * Ampli - A strong typed wrapper for your Analytics
 *
 * This file is generated by Amplitude.
 * To update run 'ampli pull frontend'
 *
 * Required dependencies: amplitude-js@^8.18.0
 * Tracking Plan Version: 8
 * Build: 1.0.0
 * Runtime: browser:typescript-ampli
 *
 * [View Tracking Plan](https://data.amplitude.com/boldare/BoldareRadar/events/main/latest)
 *
 * [Full Setup Instructions](https://data.amplitude.com/boldare/BoldareRadar/implementation/frontend)
 */

import amplitude, { AmplitudeClient, Callback, Config } from "amplitude-js";

export type Environment = "development" | "production";

export const ApiKey: Record<Environment, string> = {
  development: "",
  production: "",
};

/**
 * Default Amplitude configuration options. Contains tracking plan information.
 */
export const DefaultOptions: ConfigExt = {
  plan: {
    version: "8",
    branch: "main",
    source: "frontend",
    versionId: "31ee9fe2-9bf9-401f-83ed-ab90a67ae216",
  },
};

export interface LoadOptions {
  environment?: Environment;
  disabled?: boolean;
  client?: {
    apiKey?: string;
    options?: Partial<ConfigExt>;
    instance?: AmplitudeClient;
  };
}

export interface IdentifyProperties {
  email?: {
    [k: string]: any;
  };
}

export interface OpenItemProperties {
  itemName: string;
  itemQuadrant: string;
  itemRing: string;
}

export class Identify implements BaseEvent {
  event_type = "Identify";

  constructor(public event_properties?: IdentifyProperties) {}
}

export class Group implements BaseEvent {
  event_type = "Group";
}

export class OpenItem implements BaseEvent {
  event_type = "openItem";

  constructor(public event_properties: OpenItemProperties) {}
}

export class ViewRadar implements BaseEvent {
  event_type = "viewRadar";
}

// prettier-ignore
export class Ampli {
  private disabled: boolean = false;
  private amplitude?: AmplitudeClient;
  private middlewares: Middleware[] = [];

  get client(): AmplitudeClient {
    this.isInitializedAndEnabled();
    return this.amplitude!;
  }

  get isLoaded(): boolean {
    return this.amplitude != null;
  }

  private isInitializedAndEnabled(): boolean {
    if (!this.isLoaded) {
      console.error('ERROR: Ampli is not yet initialized. Have you called ampli.load() on app start?');
      return false;
    }
    return !this.disabled;
  }

  /**
   * Initialize the Ampli SDK. Call once when your application starts.
   * @param options Configuration options to initialize the Ampli SDK with.
   */
  load(options?: LoadOptions): void {
    this.disabled = options?.disabled ?? false;

    if (this.isLoaded) {
      console.warn('WARNING: Ampli is already initialized. Ampli.load() should be called once at application startup.');
      return;
    }

    const env = options?.environment ?? 'development';
    const apiKey = options?.client?.apiKey ?? ApiKey[env];

    if (options?.client?.instance) {
      this.amplitude = options?.client?.instance;
    } else if (apiKey) {
      this.amplitude = amplitude.getInstance();
      this.amplitude?.init(apiKey, undefined, { ...DefaultOptions, ...options?.client?.options });
    } else {
      console.error("ERROR: ampli.load() requires 'environment', 'client.apiKey', or 'client.instance'");
    }
  }

  /**
   * Identify a user and set user properties.
   *
   * @param userId The user's id.
   * @param properties The user properties.
   * @param options Optional event options.
   * @param extra Extra unstructured data for middleware.
   */
  identify(
    userId: string | undefined,
    properties?: IdentifyProperties,
    options?: IdentifyOptions,
    extra?: MiddlewareExtra
  ) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }

    const event: IdentifyEvent = {
      event_type: SpecialEventType.Identify,
      event_properties: properties,
      user_id: userId || options?.user_id,
      device_id: options?.device_id
    };
    this.runMiddleware({ event, extra }, payload => {
      const e = payload.event;
      if (e.user_id) {
        this.amplitude?.setUserId(e.user_id);
      }
      if (e.device_id) {
        this.amplitude?.setDeviceId(e.device_id);
      }
      const amplitudeIdentify = new amplitude.Identify();
      if (e.event_properties != null) {
        for (const [key, value] of Object.entries(e.event_properties)) {
          amplitudeIdentify.set(key, value);
        }
      }
      this.amplitude?.identify(
        amplitudeIdentify,
        options?.callback,
        // options?.errorCallback
      );
    });
  }

  setGroup(name: string, value: string | string[], options?: GroupOptions, extra?: MiddlewareExtra) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }

    this.amplitude?.setGroup(name, value);
  }

  /**
   * Identify a group and set group properties.
   *
   * @param groupType The group type.
   * @param groupName The group name.
   * @param options Optional event options.
   * @param extra Extra unstructured data for middleware.
   */
  groupIdentify(
    groupType: string,
    groupName: string | string[],
    options?: GroupOptions,
    extra?: MiddlewareExtra,
  ) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }

    const event: GroupEvent = {
      event_type: SpecialEventType.Group,
      user_id: options?.user_id,
      device_id: options?.device_id
    };
    this.runMiddleware({ event, extra }, payload => {
      const e = payload.event;
      if (e.user_id) {
        this.amplitude?.setUserId(e.user_id);
      }
      if (e.device_id) {
        this.amplitude?.setDeviceId(e.device_id);
      }
      const amplitudeIdentify = new amplitude.Identify();
      if (e.event_properties != null) {
        for (const [key, value] of Object.entries(e.event_properties)) {
          amplitudeIdentify.set(key, value);
        }
      }
      this.amplitude?.groupIdentify(groupType, groupName, amplitudeIdentify, options?.callback);
    });
  }

  /**
   * Track event
   *
   * @param event The event to track.
   * @param options Optional event options.
   * @param extra Extra unstructured data for middleware.
   */
  track(event: Event, options?: EventOptions, extra?: MiddlewareExtra) {
    if (!this.isInitializedAndEnabled()) {
      return;
    }

    this.runMiddleware({ event, extra }, payload => {
      this.amplitude?.logEvent(
        payload.event.event_type,
        payload.event.event_properties,
        options?.callback,
        // options?.errorCallback,
      );
    });
  }

  /**
   * openItem
   *
   * [View in Tracking Plan](https://data.amplitude.com/boldare/BoldareRadar/events/main/latest/openItem)
   *
   * Owner: Aleksander Ujek
   *
   * @param properties The event's properties (e.g. itemName)
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  openItem(
    properties: OpenItemProperties,
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new OpenItem(properties), options, extra);
  }

  /**
   * viewRadar
   *
   * [View in Tracking Plan](https://data.amplitude.com/boldare/BoldareRadar/events/main/latest/viewRadar)
   *
   * Owner: Aleksander Ujek
   *
   * @param options Amplitude event options.
   * @param extra Extra untyped parameters for use in middleware.
   */
  viewRadar(
    options?: EventOptions,
    extra?: MiddlewareExtra,
  ) {
    return this.track(new ViewRadar(), options, extra);
  }

  addEventMiddleware(middleware: Middleware): void {
    this.middlewares.push(middleware);
  }

  private runMiddleware(payload: MiddlewarePayload, next: MiddlewareNext): void {
    let curMiddlewareIndex = -1;
    const middlewareCount = this.middlewares.length;

    const middlewareNext: MiddlewareNext = curPayload => {
      curMiddlewareIndex += 1;
      if (curMiddlewareIndex < middlewareCount) {
        this.middlewares[curMiddlewareIndex](curPayload, _next);
      } else {
        next(curPayload);
      }
    };

    const _next: MiddlewareNext = middlewareCount > 0 ? middlewareNext : next;

    _next(payload);
  }
}

export const ampli = new Ampli();

// BASE TYPES
type ConfigExt = Partial<Config> & { plan?: Plan };

export type Plan = {
  branch?: string;
  source?: string;
  version?: string;
  versionId?: string;
};

export enum SpecialEventType {
  Identify = "Identify",
  Group = "Group",
}

export type BaseEvent = {
  event_type: string;
  event_properties?: { [key: string]: any };
  plan?: Plan;
  user_id?: string;
  device_id?: string;
};
export type IdentifyEvent = BaseEvent & {
  event_type: SpecialEventType.Identify;
};
export type GroupEvent = BaseEvent & { event_type: SpecialEventType.Group };
export type Event = BaseEvent | IdentifyEvent | GroupEvent;

type BaseEventOptions = Omit<BaseEvent, "event_type" | "event_properties"> & {
  callback: Callback;
  errorCallback: Callback;
};
export type EventOptions = BaseEventOptions;
export type IdentifyOptions = BaseEventOptions;
export type GroupOptions = BaseEventOptions;

/**
 * Unstructured object to let users pass extra data to middleware
 */
export interface MiddlewareExtra {
  [name: string]: any;
}

/**
 * Data to be processed by middleware
 */
export interface MiddlewarePayload {
  event: Event;
  extra?: MiddlewareExtra;
}

/**
 * Function called at the end of each Middleware to run the next middleware in the chain
 */
export type MiddlewareNext = (payload: MiddlewarePayload) => void;

/**
 * A function to run on the Event stream (each logEvent call)
 *
 * @param payload The event and extra data being sent
 * @param next Function to run the next middleware in the chain, not calling next will end the middleware chain
 */
export type Middleware = (
  payload: MiddlewarePayload,
  next: MiddlewareNext
) => void;
