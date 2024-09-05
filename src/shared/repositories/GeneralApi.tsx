/**
 * This class is designed to handle basic CRUD operations (GET, POST, PATCH) using the Fetch API. 
 * While we might not use this class in this project, you can use it  as an example to understand 
 * how to structure API requests and handle responses. This approach is one way to handle API 
 * interactions and is based on my preferences for managing HTTP requests.
 */

export class ApiClass {
    public baseURL: string;
    private config: RequestInit;

    constructor(
        baseURL: string = import.meta.env.VITE_BACKEND_API,
        config?: RequestInit
    ) {
        this.baseURL = baseURL;
        this.config = config || {};
    }

    private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseURL}${endpoint}`;
        const config: RequestInit = {
            ...this.config,
            ...options,
        };

        const response = await fetch(url, config);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        return response.json();
    }

    public async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
        return this.request<T>(endpoint, { method: 'GET', ...options });
    }

    public async post<T>(endpoint: string, body: any, options?: RequestInit): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) },
            ...options,
        });
    }

    public async patch<T>(endpoint: string, body: any, options?: RequestInit): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) },
            ...options,
        });
    }
}
