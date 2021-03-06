<?php
/**
 * Site settings table
 * 
 * @name       Joomla HD Video Share
 * @SVN        3.8
 * @package    Com_Contushdvideoshare
 * @author     Apptha <assist@apptha.com>
 * @copyright  Copyright (C) 2015 Powered by Apptha
 * @license    http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL
 * @since      Joomla 1.5
 */
/** Include component helper */
include_once (JPATH_COMPONENT_SITE . DIRECTORY_SEPARATOR . 'helper.php');

/** No direct access to this file */
defined ( '_JEXEC' ) || exitAction ( 'Restricted access' );

/**
 * Admin site settings table class.
 *
 * @package Joomla.Contus_HD_Video_Share
 * @subpackage Com_Contushdvideoshare
 * @since 1.5
 */
class Tablesitesettings extends JTable {
  public $id = null;
  public $published = null;
  public $thumbview = null;
  public $homethumbview = null;
  public $sidethumbview = null;
  public $dispenable = null;
  
  /**
   * Function to save sitesettings
   *
   * @param
   *          object &$db Database detail
   *          
   * @return Tablesitesettings
   */
  public function Tablesitesettings(&$db) {
    parent::__construct ( '#__hdflv_site_settings', 'id', $db );
  }
}
