package com.devfun.vo;

public class MovieVO {
	private int movie_id;
	private String movie_name;
	private String director;
	private String types;
	
	
	public void setMovie_id(int id) {
		this.movie_id = id;
	}
	
	public int getMovie_id() {
		return movie_id;
	}
	
	public void setMovie_name(String name) {
		this.movie_name = name;
	}
	
	public String getMovie_name() {
		return movie_name;
	}
	
	public void setDirector(String director) {
		this.director = director;
	}
	
	public String getDirector() {
		return director;
	}

	public String getTypes() {
		return types;
	}

	public void setTypes(String types) {
		this.types = types;
	}

	
	
	
	
	
}
