class GlobalStorage {
    private static instance: GlobalStorage;
    private data: Record<string, any>;
  
    private constructor() {
      this.data = {};
    }
  
    public static getInstance(): GlobalStorage {
      if (!GlobalStorage.instance) {
        GlobalStorage.instance = new GlobalStorage();
      }
      return GlobalStorage.instance;
    }
  
    public get(key: string): any {
      return this.data[key];
    }
  
    public set(key: string, value: any): void {
      this.data[key] = value;
    }

    public readSession(key: string): any {
        const data = sessionStorage.getItem(key);
        return data ? JSON.parse(data) : null;
      }
    
    public writeSession(key: string, value: any): void {
    const data = JSON.stringify(value);
    sessionStorage.setItem(key, data);
    }

    public deleteSession(key: string): void {
    sessionStorage.removeItem(key);
    }
  }

export { GlobalStorage }