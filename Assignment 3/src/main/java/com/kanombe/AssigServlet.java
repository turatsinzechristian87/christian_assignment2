package com.kanombe;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AssigServlet extends HttpServlet {
	  private static final long serialVersionUID = 1L;

	 protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	        // Replace these with your predefined username and password
	        String predefinedUsername = "christian";
	        String predefinedPassword = "1234";

	        // Get user input
	        String username = request.getParameter("username");
	        String password = request.getParameter("password");

	        if (username.equals(predefinedUsername) && password.equals(predefinedPassword)) {
	            // Authentication successful, redirect to a welcome page
	            response.sendRedirect("Home.html");
	        } else {
	            // Authentication failed, redirect to forgot password page
	            response.sendRedirect("password.html");
	        }
	    }

}
