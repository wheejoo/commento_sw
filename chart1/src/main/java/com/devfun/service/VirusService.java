package com.devfun.service;

import java.util.List;

import com.devfun.vo.VirusVO;

public interface VirusService {
   
   public List<VirusVO> selectVirus() throws Exception;
}