import { APIRequestContext, APIResponse } from '@playwright/test';

export class BaseAPI {
  protected request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(url: string, headers?: Record<string, string>): Promise<APIResponse> {
    return await this.request.get(url, { headers });
  }

  async post(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<APIResponse> {
    return await this.request.post(url, {
      headers,
      data,
    });
  }

  async put(
    url: string,
    data?: unknown,
    headers?: Record<string, string>
  ): Promise<APIResponse> {
    return await this.request.put(url, {
      headers,
      data,
    });
  }

  async delete(url: string, headers?: Record<string, string>): Promise<APIResponse> {
    return await this.request.delete(url, { headers });
  }

  getBasicAuthHeader(username: string, password: string): Record<string, string> {
    const token = Buffer.from(`${username}:${password}`).toString('base64');
    return {
      Authorization: `Basic ${token}`,
    };
  }

  getBearerTokenHeader(token: string): Record<string, string> {
    return {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  }
}