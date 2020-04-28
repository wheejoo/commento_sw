package com.devfun.service;

import java.util.List;

import javax.inject.Inject;
 
import org.springframework.stereotype.Service;
 
import com.devfun.dao.VirusDAO;
import com.devfun.vo.VirusVO;
 
@Service
public class VirusServiceImpl implements VirusService {
 
    @Inject
    private VirusDAO dao;
    
    @Override
    public List<VirusVO> selectVirus() throws Exception {
 
        return dao.selectVirus();
    }
 
}