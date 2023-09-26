// OpenAPI Specification version
  export interface OpenApiObject {
    openapi: string;
    info: InfoObject;
    paths: PathsObject;
    components?: ComponentsObject;
    servers?: ServerObject[];
    security?: SecurityRequirementObject[];
    tags?: TagObject[];
    externalDocs?: ExternalDocumentationObject;
  }
  
  // Information about the API
  export interface InfoObject {
    title: string;
    version: string;
    description?: string;
    termsOfService?: string;
    contact?: ContactObject;
    license?: LicenseObject;
  }
  
  // Contact information for the API
  export interface ContactObject {
    name?: string;
    url?: string;
    email?: string;
  }
  
  // License information for the API
  export interface LicenseObject {
    name: string;
    url?: string;
  }
  
  // Paths available in the API
  export interface PathsObject {
    [path: string]: PathItemObject | any;
  }
  
  // Path item object representing an individual API endpoint
  export interface PathItemObject {
    $ref?: string;
    summary?: string;
    description?: string;
    get?: EndpointObject;
    put?: EndpointObject;
    post?: EndpointObject;
    delete?: EndpointObject;
    options?: EndpointObject;
    head?: EndpointObject;
    patch?: EndpointObject;
    trace?: EndpointObject;
    servers?: ServerObject[];
    parameters?: (ParameterObject | ReferenceObject)[];
  }
  
  // HTTP EndpointObject
  export interface EndpointObject {
    tags?: string[];
    summary?: string;
    description?: string;
    externalDocs?: ExternalDocumentationObject;
    operationId?: string;
    parameters?: (ParameterObject | ReferenceObject)[];
    requestBody?: RequestBodyObject | ReferenceObject;
    responses: ResponsesObject;
    callbacks?: CallbacksObject;
    deprecated?: boolean;
    security?: SecurityRequirementObject[];
    servers?: ServerObject[];
  }
  
  // Request body object
  export interface RequestBodyObject {
    description?: string;
    content: {
      [mediaType: string]: MediaTypeObject;
    };
    required?: boolean;
  }
  
  // Media type object representing the request/response content type
  export interface MediaTypeObject {
    schema?: SchemaObject | ReferenceObject;
    example?: any;
    examples?: { [name: string]: ExampleObject | ReferenceObject };
  }
  
  // Schema object representing the data structure of the request/response body
  export interface SchemaObject {
    // Schema definition
  }
  
  // Response object
  export interface ResponsesObject {
    [statusCode: string]: ResponseObject | ReferenceObject;
  }
  
  // Response object for a specific status code
  export interface ResponseObject {
    description: string;
    headers?: { [name: string]: HeaderObject | ReferenceObject };
    content?: { [mediaType: string]: MediaTypeObject };
    links?: { [name: string]: LinkObject | ReferenceObject };
  }
  
  // Components object containing reusable components
  export interface ComponentsObject {
    schemas?: { [name: string]: SchemaObject | ReferenceObject };
    responses?: { [name: string]: ResponseObject | ReferenceObject };
    parameters?: { [name: string]: ParameterObject | ReferenceObject };
    examples?: { [name: string]: ExampleObject | ReferenceObject };
    requestBodies?: { [name: string]: RequestBodyObject | ReferenceObject };
    headers?: { [name: string]: HeaderObject | ReferenceObject };
    securitySchemes?: { [name: string]: SecuritySchemeObject | ReferenceObject };
    links?: { [name: string]: LinkObject | ReferenceObject };
    callbacks?: { [name: string]: CallbacksObject | ReferenceObject };
  }
  
  // Parameter object
  export interface ParameterObject {
    name: string;
    in: string;
    description?: string;
    required?: boolean;
    deprecated?: boolean;
    allowEmptyValue?: boolean;
    style?: string;
    explode?: boolean;
    allowReserved?: boolean;
    schema?: SchemaObject | ReferenceObject;
    example?: any;
    examples?: { [name: string]: ExampleObject | ReferenceObject };
    content?: { [mediaType: string]: MediaTypeObject };
  }
  
  // Server object
  export interface ServerObject {
    url: string;
    description?: string;
    variables?: { [name: string]: ServerVariableObject };
  }
  
  // Server variable object
  export interface ServerVariableObject {
    enum?: string[];
    default: string;
    description?: string;
  }
  
  // Security requirement object
  export interface SecurityRequirementObject {
    [name: string]: string[];
  }
  
  // Tag object
  export interface TagObject {
    name: string;
    description?: string;
    externalDocs?: ExternalDocumentationObject;
  }
  
  // External documentation object
  export interface ExternalDocumentationObject {
    description?: string;
    url: string;
  }
  
  // Reference object
  export interface ReferenceObject {
    $ref: string;
  }
  
  // Header object
  export interface HeaderObject {
    // Header definition
  }
  
  // Example object
  export interface ExampleObject {
    // Example definition
  }
  
  // Link object
  export interface LinkObject {
    // Link definition
  }
  
  // Callbacks object
  export interface CallbacksObject {
    // Callbacks definition
  }
  
  // Security scheme object
  export interface SecuritySchemeObject {
    // Security scheme definition
  }