class OpenApiManager{
    private static instance: OpenApiManager;
    private object: Record<string, any>;
  
    constructor(object: Record<string, any> = {}) {
      this.object = object;
    }

    static getInstance(): OpenApiManager {
        if (!OpenApiManager.instance) {
            OpenApiManager.instance = new OpenApiManager();
        }
        return OpenApiManager.instance;
    }
  
    public addProperty(key: string, value: any): this {
      this.object[key] = value;
      return this;
    }
  
    public getObject(): Record<string, any> {
      return this.object;
    }
  
    public getProperty(key: string): any {
      return this.object[key];
    }
  
    public toYaml(): string {
      const yamlArray: string[] = [];
  
      for (const key in this.object) {
        if (this.object.hasOwnProperty(key)) {
          const value = this.object[key];
          yamlArray.push(`${key}: ${JSON.stringify(value)}`);
        }
      }
  
      return yamlArray.join('\n');
    }
}