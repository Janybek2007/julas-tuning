import { z } from 'zod';
import { API_URL } from '../constants';
import { HttpClient } from '../libs/http';
import { HTTPError } from '../libs/http/http-error';

export const http = new HttpClient(API_URL, {}, true);

export function handleGenericError(error: HTTPError): HTTPError {
   const validation = GenericErrorSchema.safeParse(error.response?.data);
   if (validation.error) {
      return error;
   }

   const message = formatValidationErrors(validation.data);
   return new HTTPError(message, error.status, error.code, error.config, error.request, error.response);
}

const GenericErrorSchema = z.object({
   errors: z.record(z.string(), z.array(z.string())),
});

type GenericError = z.infer<typeof GenericErrorSchema>;

function formatValidationErrors(data: GenericError): string {
   return Object.entries(data.errors)
      .map(([field, messages]) => messages.map(message => `${field}: ${message}`).join('\n'))
      .join('\n');
}
