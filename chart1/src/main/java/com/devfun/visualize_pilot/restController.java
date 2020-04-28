package com.devfun.visualize_pilot;

import java.util.List;

import javax.inject.Inject;

import org.mariadb.jdbc.internal.logging.Logger;
import org.mariadb.jdbc.internal.logging.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devfun.service.VirusService;
import com.devfun.vo.VirusVO;


@RestController
public class restController {
	
	  private static final Logger logger = LoggerFactory.getLogger(restController.class);
	    
	    @Inject
	    private VirusService service;
	    
	    /**
	     * Simply selects the home view to render by returning its name.
	     */
	    @RequestMapping(value = "/restex")
	    public List<VirusVO> VirusList() throws Exception{
	 
	        logger.info("home");
	        
	        List<VirusVO> VirusList = service.selectVirus();
	        
	        //model.addAttribute("movieList", movieList);
	 
	        return VirusList;
	    }
	    
	}

