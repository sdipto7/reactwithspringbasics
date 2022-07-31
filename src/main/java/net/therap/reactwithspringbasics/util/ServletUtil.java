package net.therap.reactwithspringbasics.util;

import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

/**
 * @author rumi.dipto
 * @since 7/28/22
 */
public class ServletUtil {

    public static HttpServletRequest getHttpServletRequest() {
        RequestAttributes requestAttributes = RequestContextHolder.currentRequestAttributes();
        ServletRequestAttributes attributes = (ServletRequestAttributes) requestAttributes;

        return attributes.getRequest();
    }
}