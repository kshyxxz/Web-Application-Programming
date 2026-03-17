import time
import logging


logger = logging.getLogger(__name__)

class RequestTimingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        start = time.time()
        logger.info("[REQUEST] %s %s", request.method, request.path)

        response = self.get_response(request)

        duration = time.time() - start
        response['X-Request-Duration'] = f"{duration:.4f}s"
        logger.info(
            "[RESPONSE] %s took %.4fs | Status: %s",
            request.path,
            duration,
            response.status_code,
        )
        return response