package br.mp.mpf.impactoorcamento.sgp.app.service.error;

public class RestException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1725768807670719514L;

	public RestException() {
	}

	public RestException(String message) {
		super(message);
	}

	public RestException(Throwable cause) {
		super(cause);
	}

	public RestException(String message, Throwable cause) {
		super(message, cause);
	}

}
