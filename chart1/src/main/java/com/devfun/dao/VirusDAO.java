package com.devfun.dao;

import java.util.List;

import com.devfun.vo.VirusVO;

public interface VirusDAO {
	public List<VirusVO> selectVirus() throws Exception;

}
